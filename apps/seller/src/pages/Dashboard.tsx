import { Card, Button } from '@medicycle/ui';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { PackagePlus, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';
import { formatCurrency } from '@medicycle/utils';
import { motion } from 'framer-motion';

const data = [
  { name: 'Mon', revenue: 4000 },
  { name: 'Tue', revenue: 3000 },
  { name: 'Wed', revenue: 2000 },
  { name: 'Thu', revenue: 2780 },
  { name: 'Fri', revenue: 1890 },
  { name: 'Sat', revenue: 2390 },
  { name: 'Sun', revenue: 3490 },
];

export default function Dashboard() {
  return (
    <div className="p-8 max-w-6xl mx-auto space-y-8">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-white mb-1">Overview</h1>
          <p className="text-gray-400">Welcome back, City Pharmacy.</p>
        </div>
        <Button className="bg-accent-green hover:bg-emerald-600 gap-2">
          <PackagePlus size={18} /> Add Medicine
        </Button>
      </header>

      {/* Stats Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard title="Total Revenue" value={formatCurrency(12450.00)} trend="+14%" positive />
        <StatCard title="Active Listings" value="142" trend="+3" positive />
        <StatCard title="Pending Orders" value="18" alert />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Chart */}
        <Card glass className="p-6 lg:col-span-2">
          <h3 className="text-lg font-bold mb-6">Revenue Analytics</h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10B981" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" vertical={false} />
                <XAxis dataKey="name" stroke="#ffffff50" axisLine={false} tickLine={false} />
                <YAxis stroke="#ffffff50" axisLine={false} tickLine={false} tickFormatter={(value) => `$${value}`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#111827', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                  itemStyle={{ color: '#10B981' }}
                />
                <Area type="monotone" dataKey="revenue" stroke="#10B981" strokeWidth={3} fillOpacity={1} fill="url(#colorRev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>

        {/* Action Required */}
        <Card glass className="p-6">
          <h3 className="text-lg font-bold mb-4">Action Required</h3>
          <div className="space-y-4">
            <AlertItem title="Low Stock" desc="Amoxicillin 500mg is running low (2 left)." type="warning" />
            <AlertItem title="Expiring Soon" desc="Ibuprofen batch expires in 30 days." type="danger" />
            <AlertItem title="New Message" desc="Buyer asked about Lisinopril." type="info" />
          </div>
        </Card>
      </div>
    </div>
  );
}

function StatCard({ title, value, trend, positive, alert }: { title: string, value: string, trend?: string, positive?: boolean, alert?: boolean }) {
  return (
    <motion.div whileHover={{ y: -5 }}>
      <Card glass className="p-6">
        <h3 className="text-sm text-gray-400 font-medium mb-2">{title}</h3>
        <div className="flex justify-between items-end">
          <span className="text-3xl font-bold">{value}</span>
          {trend && (
            <span className={`text-sm font-medium flex items-center gap-1 ${positive ? 'text-accent-green' : 'text-red-400'}`}>
              <TrendingUp size={14} /> {trend}
            </span>
          )}
          {alert && (
            <span className="text-sm font-medium flex items-center gap-1 text-accent-orange">
              <AlertCircle size={14} /> Action Needed
            </span>
          )}
        </div>
      </Card>
    </motion.div>
  );
}

function AlertItem({ title, desc, type }: { title: string, desc: string, type: 'warning'|'danger'|'info' }) {
  const colors = {
    warning: 'text-accent-orange bg-accent-orange/10 border-accent-orange/20',
    danger: 'text-red-400 bg-red-400/10 border-red-400/20',
    info: 'text-accent-blue bg-accent-blue/10 border-accent-blue/20',
  };
  return (
    <div className={`p-3 rounded-lg border ${colors[type]}`}>
      <h4 className="font-semibold text-sm mb-1">{title}</h4>
      <p className="text-xs opacity-80">{desc}</p>
    </div>
  );
}
