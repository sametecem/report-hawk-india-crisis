
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { CircleUser, Users, Flag } from 'lucide-react';

interface PersonasTabProps {
  userPersonas: any[];
  userActivityPatterns: any[];
  formatNumber: (num: number) => string;
}

const PersonasTab: React.FC<PersonasTabProps> = ({ userPersonas, userActivityPatterns, formatNumber }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* User Persona Types */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-3">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CircleUser className="h-5 w-5 text-indigo-500" />
            Kullanıcı Personaları
          </CardTitle>
          <CardDescription>
            Profil fotoğrafı tipine göre kullanıcı grupları ve davranış analizi
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {userPersonas.map((persona, index) => (
              <div 
                key={index} 
                className="bg-white border rounded-xl shadow-sm overflow-hidden"
              >
                <div className="p-4 border-b border-gray-100">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={persona.sampleProfilePic} alt={persona.type} />
                      <AvatarFallback>{persona.type.slice(0, 2).toUpperCase()}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold text-gray-800">{persona.type}</h4>
                      <p className="text-sm text-gray-500">{persona.percentage}% kullanıcı</p>
                    </div>
                  </div>
                </div>
                
                <div className="px-4 py-3 bg-gray-50">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Karakteristikler:</h5>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {persona.characteristics.map((char, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 mr-2"></span>
                        {char}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="p-4 border-t border-gray-100">
                  <h5 className="text-sm font-medium text-gray-700 mb-2">Örnek Yorum:</h5>
                  <p className="text-xs text-gray-600 italic">"{persona.sampleComment}"</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* User Activity Patterns */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm col-span-1 lg:col-span-2">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Users className="h-5 w-5 text-blue-500" />
            Kullanıcı Aktivite Desenleri
          </CardTitle>
          <CardDescription>
            Farklı persona tiplerinin yorum aktivite paterni
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={userActivityPatterns}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis
                  dataKey="hour"
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                  width={40}
                />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="realPhoto"
                  name="Gerçek Fotoğraflı"
                  stroke="#3b82f6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="memePhoto"
                  name="Meme/Logo Kullanıcılar"
                  stroke="#8b5cf6"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="anonymous"
                  name="Anonim/Boş Profil"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* User Negativity Analysis */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Flag className="h-5 w-5 text-red-500" />
            Negativite Analizi
          </CardTitle>
          <CardDescription>
            Persona tiplerinin negativite oranları
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={userPersonas}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
                layout="vertical"
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f0f0f0" />
                <XAxis
                  type="number"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                />
                <YAxis
                  dataKey="type"
                  type="category"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                  width={140}
                />
                <Tooltip
                  formatter={(value: any) => [`${Number(value)}%`, "Negatif Yorum Oranı"]}
                />
                <Legend />
                <Bar
                  dataKey="negativityPercentage"
                  name="Negatif Yorum Oranı"
                  fill="#ef4444"
                  radius={[0, 4, 4, 0]}
                  barSize={20}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonasTab;
