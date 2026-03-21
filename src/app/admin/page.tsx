"use client";

import { useState } from "react";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Settings, 
  LogOut, 
  Plus, 
  Trash2, 
  Edit,
  CheckCircle,
  Clock
} from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarLinks = [
  { name: "Dashboard", icon: LayoutDashboard, active: true },
  { name: "Bookings", icon: Calendar },
  { name: "Attractions", icon: Users },
  { name: "Settings", icon: Settings },
];

const mockBookings = [
  { id: 1, name: "John Doe", date: "2026-04-15", status: "Confirmed", total: "$450" },
  { id: 2, name: "Sarah Jenkins", date: "2026-04-20", status: "Pending", total: "$280" },
  { id: 3, name: "Alex Thompson", date: "2026-05-02", status: "Cancelled", total: "$120" },
];

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className="flex min-h-screen bg-zinc-50 dark:bg-black font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-primary text-white p-6 flex flex-col">
        <div className="flex items-center gap-3 mb-10 px-2">
          <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center">
            <LayoutDashboard className="text-primary w-5 h-5" />
          </div>
          <span className="luxury-heading font-bold text-lg">ADMIN HUB</span>
        </div>

        <nav className="flex-grow space-y-2">
          {sidebarLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => setActiveTab(link.name)}
              className={cn(
                "w-full flex items-center gap-4 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                activeTab === link.name 
                  ? "bg-secondary text-primary" 
                  : "text-white/60 hover:bg-white/10 hover:text-white"
              )}
            >
              <link.icon className="w-5 h-5" />
              {link.name}
            </button>
          ))}
        </nav>

        <button className="flex items-center gap-4 px-4 py-3 text-white/40 hover:text-white transition-colors mt-auto">
          <LogOut className="w-5 h-5" />
          Sign Out
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-grow p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h1 className="luxury-heading text-3xl font-bold">Welcome Back, Guide</h1>
            <p className="text-zinc-500">Here's what's happening with your travels today.</p>
          </div>
          <button className="bg-primary text-white px-6 py-2 rounded-xl text-sm font-bold flex items-center gap-2 shadow-lg hover:bg-secondary hover:text-primary transition-all">
            <Plus className="w-4 h-4" /> New Attraction
          </button>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <p className="text-sm text-zinc-400 font-bold uppercase tracking-widest mb-2">Total Inquiries</p>
            <h3 className="text-4xl font-bold">128</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <p className="text-sm text-zinc-400 font-bold uppercase tracking-widest mb-2">Revenue</p>
            <h3 className="text-4xl font-bold">$12,450</h3>
          </div>
          <div className="bg-white dark:bg-zinc-900 p-6 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800">
            <p className="text-sm text-zinc-400 font-bold uppercase tracking-widest mb-2">Satisfaction</p>
            <h3 className="text-4xl font-bold">99%</h3>
          </div>
        </div>

        {/* Recent Bookings Table */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl shadow-sm border border-zinc-100 dark:border-zinc-800 overflow-hidden">
          <div className="p-6 border-b border-zinc-50 dark:border-zinc-800 flex justify-between items-center">
            <h3 className="luxury-heading text-xl font-bold">Recent Inquiries</h3>
            <button className="text-secondary text-sm font-bold hover:underline">View All</button>
          </div>
          <table className="w-full text-left">
            <thead className="bg-zinc-50 dark:bg-zinc-950 text-xs uppercase tracking-widest text-zinc-400 font-bold">
              <tr>
                <th className="px-6 py-4">Traveler</th>
                <th className="px-6 py-4">Date</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Total</th>
                <th className="px-6 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-50 dark:divide-zinc-800">
              {mockBookings.map((booking) => (
                <tr key={booking.id} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
                  <td className="px-6 py-4 font-bold">{booking.name}</td>
                  <td className="px-6 py-4 text-zinc-500">{booking.date}</td>
                  <td className="px-6 py-4">
                    <span className={cn(
                      "px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest",
                      booking.status === "Confirmed" ? "bg-green-100 text-green-600" :
                      booking.status === "Pending" ? "bg-amber-100 text-amber-600" :
                      "bg-red-100 text-red-600"
                    )}>
                      {booking.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 font-bold">{booking.total}</td>
                  <td className="px-6 py-4 flex gap-3 text-zinc-400">
                    <button className="hover:text-primary transition-colors"><Edit className="w-4 h-4" /></button>
                    <button className="hover:text-red-500 transition-colors"><Trash2 className="w-4 h-4" /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
