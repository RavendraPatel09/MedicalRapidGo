import { Card, Button } from '@medicycle/ui';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Users, AlertTriangle, ShieldCheck, Download } from 'lucide-react';
import { formatCurrency } from '@medicycle/utils';
import { motion } from 'framer-motion';

const data = [
  { name: 'Mon', transactions: 40 },
  { name: 'Tue', transactions: 30 },
  { name: 'Wed', transactions: 20 },
  { name: 'Thu', transactions: 27 },
  { name: 'Fri', transactions: 18 },
  { name: 'Sat', transactions: 23 },
  { name: 'Sun', transactions: 34 },
];

export default function Dashboard() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Platform Overview</h1>
          <p className="text-gray-400">Global statistics and platform health.</p>
        </div>
        <Button variant="outline" className="gap-2">
          <Download size={18} /> Export Report
        </Button>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatCard title="Total Volume (30d)" value={formatCurrency(124500.00)} icon={<BarChart size={20} />} />
        <StatCard title="Active Users" value="12,492" icon={<Users size={20} />} />
        <StatCard title="Verified Sellers" value="843" icon={<ShieldCheck size={20} className="text-accent-green" />} />
        <StatCard title="Fraud Alerts" value="12" icon={<AlertTriangle size={20} className="text-accent-orange" />} alert />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <Card glass className="p-6 lg:col-span-2">
          <h3 className="text-lg font-bold mb-6">Transaction Volume</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff50" axisLine={false} tickLine={false} />
                <YAxis stroke="#ffffff50" axisLine={false} tickLine={false} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  cursor={{ fill: '#ffffff10' }}
                />
                <Bar dataKey="transactions" fill="#8B5CF6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Audit Logs */}
        <Card glass className="p-6">
          <h3 className="text-lg font-bold mb-4">Recent Audit Logs</h3>
          <div className="space-y-4">
            <AuditItem title="New Seller Approved" time="2 mins ago" user="Admin_01" />
            <AuditItem title="Suspicious Login Blocked" time="15 mins ago" user="System" warning />
            <AuditItem title="Listing Removed (Expired)" time="1 hour ago" user="Admin_02" />
            <AuditItem title="Platform Fee Updated" time="3 hours ago" user="SuperAdmin" />
          </div>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, icon, alert }: { title: string, value: string, icon: React.ReactNode, alert?: boolean }) {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card glass className={`p-6 ${alert ? 'border-accent-orange/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : ''}`}>
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-sm text-gray-400 font-medium">{title}</h3>
          <div className="text-gray-400">{icon}</div>
        </div>
        <span className="text-3xl font-bold">{value}</span>
      </Card>
    </motion.div>
  );
}

function AuditItem({ title, time, user, warning }: { title: string, time: string, user: string, warning?: boolean }) {
  return (
    <div className="border-b border-white/5 last:border-0 pb-3 last:pb-0">
      <div className="flex justify-between items-start mb-1">
        <h4 className={`text-sm font-semibold ${warning ? 'text-accent-orange' : 'text-gray-200'}`}>{title}</h4>
        <span className="text-xs text-gray-500 whitespace-nowrap">{time}</span>
      </div>
      <p className="text-xs text-gray-400">By {user}</p>
    </div>
  );
}
