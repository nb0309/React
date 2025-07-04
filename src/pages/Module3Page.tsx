/**
 * 🏗️  DEVELOPMENT GUIDE - Module3 Page Component
 *
 * 📋 Original Requirements: Generate TypeScript interfaces and React components for a report header module that matches the VB6 Module3 specification. The module should include: 1) A TypeScript interface for report_header with SchoolName, SchoolAddress, SY (school year), and SectionName fields, 2) A React component to display the header information, 3) A service to fetch header data from an API, and 4) A page component that uses the header component and service.
 *
 * 🚀 Enhancement Ideas:
 * - Add URL-based filtering and search
 * - Implement breadcrumb navigation
 * - Add export/import functionality
 * - Include real-time updates (WebSocket/SSE)
 * - Add keyboard shortcuts for common actions
 * - Implement undo/redo functionality
 *
 * 💡 State Management Improvements:
 * - Use useReducer for complex state logic
 * - Add optimistic updates for better UX
 * - Implement proper error boundaries
 * - Add loading skeletons instead of spinners
 *
 * 🔧 User Experience:
 * - Add confirmation dialogs for destructive actions
 * - Implement toast notifications for feedback
 * - Add drag-and-drop for reordering
 * - Include accessibility features (ARIA labels)
 *
 * 📱 Responsive Design:
 * - Add mobile-specific components
 * - Implement swipe actions for mobile
 * - Consider drawer/modal layouts for small screens
 */

import React, { useState, useEffect } from "react";
import Module3Form from "../components/Module3Form";
import Module3List from "../components/Module3List";
import module3Service from "../services/module3Service";
import { Module3Data, Module3FormData } from "../types/Module3Types";

const Module3Page: React.FC = () => {
  const [items, setItems] = useState<Module3Data[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [editingItem, setEditingItem] = useState<Module3Data | null>(null);

  const fetchItems = async () => {
    try {
      setLoading(true);
      const data = await module3Service.getAll();
      setItems(data);
      setError(null);
    } catch (err) {
      setError("Failed to fetch items");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleCreate = async (formData: Module3FormData) => {
    try {
      setLoading(true);
      const newItem = await module3Service.create(formData);
      setItems([...items, newItem]);
      setError(null);
    } catch (err) {
      setError("Failed to create item");
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (id: string, formData: Module3FormData) => {
    try {
      setLoading(true);
      const updatedItem = await module3Service.update(id, formData);
      setItems(items.map((item) => (item.id === id ? updatedItem : item)));
      setEditingItem(null);
      setError(null);
    } catch (err) {
      setError("Failed to update item");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setLoading(true);
      await module3Service.delete(id);
      setItems(items.filter((item) => item.id !== id));
      setError(null);
    } catch (err) {
      setError("Failed to delete item");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (item: Module3Data) => {
    setEditingItem(item);
  };

  const handleCancelEdit = () => {
    setEditingItem(null);
  };

  return (
    <div>
      <h1>Module 3</h1>
      {error && <div className="error">{error}</div>}
      <Module3Form
        onSubmit={
          editingItem
            ? (data) => handleUpdate(editingItem.id, data)
            : handleCreate
        }
        initialData={editingItem}
        onCancel={editingItem ? handleCancelEdit : undefined}
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <Module3List
          items={items}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      )}
    </div>
  );
};

export default Module3Page;
