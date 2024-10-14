import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import Header from '@/components/auths/Header';
import Sidebar from '@/components/Sidebar';

interface TeamMember {
    id: number;
    name: string;
    role: string;
    status: 'Active' | 'Inactive';
}

const TeamMemberPage: React.FC = () => {
    const [members, setMembers] = useState<TeamMember[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [editMember, setEditMember] = useState<TeamMember | null>(null);
    const [formData, setFormData] = useState<Omit<TeamMember, 'id'>>({ name: '', role: '', status: 'Active' });
    const [formError, setFormError] = useState<string | null>(null); // State for form validation error
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
        setFormData({ name: member.name, role: member.role, status: member.status });
        setFormError(null);
    };

    const handleDelete = async (id: number) => {
        try {
            await axios.delete(`http://localhost:8000/api/teams/${teamId}/members/${id}`);
            setMembers(members.filter((member) => member.id !== id));
        } catch (error) {
            console.error('Error deleting member:', error);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setFormError(null);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitting:', formData);
        // Validate form data
        if (!formData.name || !formData.role || !formData.status) {
            setFormError("Name, role, and status are required");
            return;
        }
        try {
            if (editMember) {
                // Update member
                console.log('Updating member with ID:', editMember.id); // Log the member being updated
                await axios.put(`http://localhost:8000/api/teams/${teamId}/members/${editMember.id}`, formData);
                setMembers(members.map((member) => (member.id === editMember.id ? { ...member, ...formData } : member)));
            } else {
                // Add new member
                console.log('Adding new member:', formData); // Log the new member data
                const response = await axios.post(`http://localhost:8000/api/teams/${teamId}/members`, formData);
                setMembers([...members, response.data]);
            }
            // Reset form data
            setFormData({ name: '', role: '', status: 'Active' });
            setEditMember(null);
            setFormError(null);
        } catch (error) {
            console.error('Error saving member:', error);
            if (axios.isAxiosError(error) && error.response) {
                setFormError(error.response.data.error || 'Failed to save member');
            } else {
                setFormError('An unexpected error occurred');
            }
        }
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
                    <form onSubmit={handleSubmit} className="mb-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            required
                            className="border p-2 rounded mr-2"
                        />
                        <input
                            type="text"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            placeholder="Role"
                            required
                            className="border p-2 rounded mr-2"
                        />
                        <select name="status" value={formData.status} onChange={handleChange} className="border p-2 rounded mr-2">
                            <option value="Active">Active</option>
                            <option value="Inactive">Inactive</option>
                        </select>
                        <button type="submit" className="bg-blue-600 text-white p-2 rounded">
                            {editMember ? 'Update Member' : 'Add Member'}
                        </button>
                        {editMember && (
                            <button
                                type="button"
                                onClick={() => {
                                    setEditMember(null);
                                    setFormData({ name: '', role: '', status: 'Active' });
                                    setFormError(null);
                                }}
                                className="bg-gray-600 text-white p-2 rounded ml-2"
                            >
                                Cancel
                            </button>
                        )}
                    </form>
                    {formError && <p className="text-red-600">{formError}</p>}
                    <ul>
                        {members.map((member) => (
                            <li key={member.id} className="border p-2 mb-2 rounded shadow flex justify-between items-center">
                                <div>
                                    <h2 className="font-bold">{member.name}</h2>
                                    <p>Role: {member.role}</p>
                                    <p>Status: {member.status}</p>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        onClick={() => handleEdit(member)}
                                        className="text-blue-600 hover:underline flex items-center"
                                    >
                                        <FaEdit className="mr-1" /> Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(member.id)}
                                        className="text-red-600 hover:underline flex items-center"
                                    >
                                        <FaTrash className="mr-1" /> Delete
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberPage;