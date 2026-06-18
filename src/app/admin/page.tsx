"use client";

import React, { useState, useEffect } from "react";
import CandidateForm from "@/components/admin/CandidateForm";
import { Candidate } from "@/types/candidate";
import { Plus, Edit2, Trash2, ShieldCheck } from "lucide-react";

export default function AdminDashboardPage() {
  const [candidates, setCandidates] = useState<Candidate[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCandidate, setEditingCandidate] = useState<Candidate | undefined>();

  useEffect(() => {
    fetchCandidates();
  }, []);

  const fetchCandidates = async () => {
    try {
      const res = await fetch("/api/candidates");
      const data = await res.json();
      setCandidates(data);
    } catch (error) {
      console.error("Failed to fetch candidates", error);
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (data: Partial<Candidate>) => {
    try {
      await fetch("/api/candidates", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setIsFormOpen(false);
      fetchCandidates();
    } catch (error) {
      console.error("Failed to create", error);
    }
  };

  const handleUpdate = async (data: Partial<Candidate>) => {
    if (!editingCandidate) return;
    try {
      await fetch(`/api/candidates/${editingCandidate.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      setEditingCandidate(undefined);
      fetchCandidates();
    } catch (error) {
      console.error("Failed to update", error);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this candidate?")) return;
    try {
      await fetch(`/api/candidates/${id}`, {
        method: "DELETE",
      });
      fetchCandidates();
    } catch (error) {
      console.error("Failed to delete", error);
    }
  };

  const openEdit = (candidate: Candidate) => {
    setEditingCandidate(candidate);
    setIsFormOpen(false);
  };

  const openCreate = () => {
    setEditingCandidate(undefined);
    setIsFormOpen(true);
  };

  const closeForm = () => {
    setIsFormOpen(false);
    setEditingCandidate(undefined);
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-200 dark:border-white/10 pb-6">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-vine-green text-xs font-semibold uppercase tracking-wider">
              <ShieldCheck className="w-4 h-4" /> Secure Admin Panel
            </div>
            <h1 className="font-display text-3xl font-bold text-black dark:text-white tracking-tight">
              Talent Pool Management
            </h1>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Add, edit, or remove candidate profiles from the anonymous talent pool.
            </p>
          </div>
          <button
            onClick={openCreate}
            className="inline-flex items-center gap-2 px-4 py-2 bg-vine-green text-white font-semibold rounded-vine hover:bg-vine-green/90 transition-colors shrink-0"
          >
            <Plus className="w-4 h-4" /> Post New Candidate
          </button>
        </div>

        {/* Form Area */}
        {(isFormOpen || editingCandidate) && (
          <div className="mb-8 animate-in fade-in slide-in-from-top-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-bold text-black dark:text-white">
                {editingCandidate ? `Edit Candidate: ${editingCandidate.id}` : "Create New Candidate Profile"}
              </h2>
            </div>
            <CandidateForm
              key={editingCandidate ? editingCandidate.id : "new"}
              initialData={editingCandidate}
              onSubmit={editingCandidate ? handleUpdate : handleCreate}
              onCancel={closeForm}
            />
          </div>
        )}

        {/* Data Table */}
        <div className="bg-white/5 dark:bg-[#010a1f] border border-gray-200 dark:border-white/5 rounded-2xl overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm whitespace-nowrap">
              <thead className="bg-gray-50 dark:bg-white/5 text-gray-600 dark:text-gray-300 font-semibold border-b border-gray-200 dark:border-white/10">
                <tr>
                  <th className="px-6 py-4">ID</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Exp. Level</th>
                  <th className="px-6 py-4">Location</th>
                  <th className="px-6 py-4">Auth</th>
                  <th className="px-6 py-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-white/5">
                {loading ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                      <div className="inline-block w-6 h-6 border-2 border-vine-green border-t-transparent rounded-full animate-spin mb-2"></div>
                      <p>Loading candidates...</p>
                    </td>
                  </tr>
                ) : candidates.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-12 text-center text-gray-500 dark:text-gray-400">
                      No candidates found.
                    </td>
                  </tr>
                ) : (
                  candidates.map((candidate) => (
                    <tr key={candidate.id} className="hover:bg-gray-50 dark:hover:bg-white/5 transition-colors text-black dark:text-white">
                      <td className="px-6 py-4 font-mono text-xs">{candidate.id}</td>
                      <td className="px-6 py-4 font-medium">{candidate.role}</td>
                      <td className="px-6 py-4">{candidate.experienceLevel}</td>
                      <td className="px-6 py-4">{candidate.locationCity}</td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-1 bg-gray-100 dark:bg-white/10 rounded-md text-xs">
                          {candidate.workAuth}
                        </span>
                      </td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openEdit(candidate)}
                            className="p-2 text-gray-500 hover:text-vine-green hover:bg-vine-green/10 rounded-md transition-colors"
                            title="Edit"
                          >
                            <Edit2 className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(candidate.id)}
                            className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-md transition-colors"
                            title="Delete"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        
      </div>
    </div>
  );
}
