import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { FaEdit, FaTrash, FaBackward, FaUserPlus } from 'react-icons/fa';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    status: 'Active' | 'Inactive' | '';
    gender: 'Male' | 'Female' | 'Other' | '';
}

const TeamMemberPage: React.FC = () => {
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [editMember, setEditMember] = useState<TeamMember | null>(null);
    const [formData, setFormData] = useState<Omit<TeamMember, 'id'>>({ name: '', role: '', status: '', gender: '' });
    const [formError, setFormError] = useState<string | null>(null);
    const [showForm, setShowForm] = useState<boolean>(false);
    const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
    const [memberToDelete, setMemberToDelete] = useState<number | null>(null);
    const router = useRouter();
    const { teamId } = router.query;

    useEffect(() => {
        const fetchMembers = async () => {
            if (teamId) {
                try {
                    const response = await axios.get(`http://localhost:8000/api/teams/${teamId}/members`);
                    setMembers(response.data);
                } catch (error) {
                    setError('Failed to load members');
                    console.error('Error fetching members:', error);
                } finally {
                    setLoading(false);
                }
            }
        };

        fetchMembers();
    }, [teamId]);

    const handleEdit = (member: TeamMember) => {
        setEditMember(member);
        setFormData({ name: member.name, role: member.role, status: member.status, gender: member.gender });
        setFormError(null);
        setShowForm(true);
    };

    const handleDelete = async () => {
        if (memberToDelete !== null) {
            try {
                await axios.delete(`http://localhost:8000/api/teams/${teamId}/members/${memberToDelete}`);
                setMembers(members.filter((member) => member.id !== memberToDelete));
                setShowDeleteModal(false);
            } catch (error) {
                console.error('Error deleting member:', error);
            }
        }
    };

    const handleDeleteClick = (id: number) => {
        setMemberToDelete(id);
        setShowDeleteModal(true);
    };

    const handleCancelDelete = () => {
        setShowDeleteModal(false);
        setMemberToDelete(null);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormError(null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!formData.name || !formData.role || !formData.status || !formData.gender) {
            setFormError("Name, role, status, and gender are required");
            return;
        }

        try {
            if (editMember) {
                await axios.put(`http://localhost:8000/api/teams/${teamId}/members/${editMember.id}`, formData);
                setMembers(members.map((member) => (member.id === editMember.id ? { ...member, ...formData } : member)));
            } else {
                const response = await axios.post(`http://localhost:8000/api/teams/${teamId}/members`, formData);
                setMembers([...members, response.data]);
            }

            setFormData({ name: '', role: '', status: '', gender: '' });
            setEditMember(null);
            setFormError(null);
            setShowForm(false);
        } catch (error) {
            console.error('Error saving member:', error);
            setFormError('Failed to save member');
        }
    };

    const handleBack = () => {
        router.push('/admin/team');
    };

    if (loading) return <p>Loading members...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="team-members-container flex flex-col w-auto">
            <Header />
            <div className="flex">
                <Sidebar />
                <div className="main flex-grow p-5">
                    <h1 className="text-2xl font-bold mb-4">Team Members</h1>
                    <div className="mb-4 flex justify-between">
                        <button
                            onClick={handleBack}
                            className="bg-blue-900 text-white font-semibold hover:bg-blue-800 rounded-lg py-2 px-4 mr-2"
                        >
                            <FaBackward className="inline mr-1" /> Back
                        </button>
                        <button
                            onClick={() => {
                                setShowForm(true);
                                setEditMember(null);
                                setFormData({ name: '', role: '', status: '', gender: '' });
                            }}
                            className="bg-blue-900 text-white font-semibold hover:bg-blue-800 rounded-lg py-2 px-4"
                        >
                            <FaUserPlus className='inline mr-1'/>Add Member
                        </button>
                    </div>
                    <ul>
                        {members.map((member) => (
                            <li key={member.id} className="border p-2 mb-2 rounded shadow flex justify-between items-center">
                                <div>
                                    <h2 className="font-bold">{member.name}</h2>
                                    <p>Role: {member.role}</p>
                                    <p>Status: {member.status}</p>
                                    <p>Gender: {member.gender}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleEdit(member)}
                                        className="text-blue-600 hover:underline flex items-center"
                                    >
                                        <FaEdit className="mr-1" /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDeleteClick(member.id)}
                                        className="text-red-600 hover:underline flex items-center"
                                    >
                                        <FaTrash className="mr-1" /> Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                    {showForm && (
                        <div className="modal fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                            <div className="bg-white p-6 rounded shadow-md w-1/3">
                                <h2 className="text-xl font-bold mb-4">{editMember ? 'Edit Member' : 'Add Member'}</h2>
                                <form onSubmit={handleSubmit} className="mb-4">
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Name"
                                        required
                                        className="border p-2 rounded mr-2 w-full mb-2"
                                    />
                                    <input
                                        type="text"
                                        name="role"
                                        value={formData.role}
                                        onChange={handleChange}
                                        placeholder="Role"
                                        required
                                        className="border p-2 rounded mr-2 w-full mb-2"
                                    />
                                    <select name="status" value={formData.status} onChange={handleChange} className="border p-2 rounded mb-2 w-full">
                                        <option value="">Select Status</option>
                                        <option value="Active">Active</option>
                                        <option value="Inactive">Inactive</option>
                                    </select>
                                    <select name="gender" value={formData.gender} onChange={handleChange} className="border p-2 rounded mb-2 w-full">
                                        <option value="">Select Gender</option>
                                        <option value="Male">Male</option>
                                        <option value="Female">Female</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    <div className="flex justify-between">
                                        <button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            className="mr-2 bg-gray-300 text-black py-2 px-4 rounded"
                                        >
                                            Cancel
                                        </button>
                                        <button type="submit" className="bg-blue-900 text-white p-2 rounded">
                                            {editMember ? 'Update Member' : 'Add Member'}
                                        </button>
                                    </div>
                                </form>
                                {formError && <p className="text-red-600">{formError}</p>}
                            </div>
                        </div>
                    )}
                    {/* Delete Confirmation Modal */}
                    {showDeleteModal && (
                        <div className="modal fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
                            <div className="bg-white p-6 rounded shadow-md w-1/3">
                                <h2 className="text-xl font-bold mb-4">Confirm Delete</h2>
                                <p>Are you sure to delete this member?</p>
                                <div className="flex justify-between mt-4">
                                    <button
                                        onClick={handleCancelDelete}
                                        className="border text-black py-2 px-4 rounded"
                                    >
                                        Cancel
                                    </button>
                                    <button
                                        onClick={handleDelete}
                                        className="bg-red-600 text-white py-2 px-4 rounded"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TeamMemberPage;