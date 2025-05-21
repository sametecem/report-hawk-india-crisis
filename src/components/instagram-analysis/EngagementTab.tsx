
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ComposedChart, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart2, MessageSquare, Search, Link } from 'lucide-react';

interface EngagementTabProps {
  postBoycottIntensity: any[];
  topComments: any[];
  languageDistribution: any[];
  formatNumber: (num: number) => string;
}

const EngagementTab: React.FC<EngagementTabProps> = ({ postBoycottIntensity, topComments, languageDistribution, formatNumber }) => {
  return (
    <div className="grid grid-cols-1 gap-6">
      {/* Post Based Boycot Intensity */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BarChart2 className="h-5 w-5 text-blue-500" />
            Post Bazlı Boykot Yoğunluğu
          </CardTitle>
          <CardDescription>
            Her gönderi için toplam yorum ve negatif yorum oranı
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart
                data={postBoycottIntensity}
                margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis
                  dataKey="postId"
                  tick={{ fontSize: 11 }}
                  angle={-45}
                  textAnchor="end"
                  axisLine={false}
                  tickLine={false}
                  dy={10}
                />
                <YAxis
                  yAxisId="left"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                  width={40}
                />
                <YAxis
                  yAxisId="right"
                  orientation="right"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                  width={40}
                  tickFormatter={(value) => `${value}%`}
                />
                <Tooltip 
                  content={({ active, payload, label }) => {
                    if (active && payload && payload.length) {
                      const data = payload[0].payload;
                      return (
                        <div className="bg-white p-3 border border-gray-200 shadow-md rounded-md text-xs">
                          <p className="font-medium mb-1">Post #{data.postId}</p>
                          <p className="text-gray-700">{data.postDescription}</p>
                          <p className="text-blue-600 mt-1">Yorum: {formatNumber(data.totalComments)}</p>
                          <p className="text-red-600">Negatif: {data.negativePercentage}%</p>
                        </div>
                      );
                    }
                    return null;
                  }}
                />
                <Legend />
                <Bar
                  yAxisId="left"
                  dataKey="totalComments"
                  name="Toplam Yorum"
                  fill="#3b82f6"
                  radius={[4, 4, 0, 0]}
                  barSize={20}
                />
                <Line
                  yAxisId="right"
                  type="monotone"
                  dataKey="negativePercentage"
                  name="Negatif Yorum Oranı (%)"
                  stroke="#ef4444"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
      
      {/* Top Comments */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-indigo-500" />
            En Çok Etkileşim Alan Yorumlar
          </CardTitle>
          <CardDescription>
            Yorum uzunluğu ve alıntı sayısına göre "etki" skoru en yüksek yorumlar
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {topComments.slice(0, 6).map((comment, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md border border-gray-100 p-4 flex flex-col">
                <div className="flex items-center gap-3 mb-3">
                  <Avatar>
                    <AvatarImage src={comment.userProfilePic} alt={comment.username} />
                    <AvatarFallback>{comment.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-gray-800">@{comment.username}</p>
                    <p className="text-xs text-gray-500">{comment.date}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm mb-3 flex-1">{comment.text}</p>
                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">Etki: {comment.impactScore}</span>
                  </div>
                  {comment.postLink && (
                    <a 
                      href={comment.postLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex hover:text-blue-600 text-blue-500"
                    >
                      <Link className="h-4 w-4" />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      
      {/* Language Distribution */}
      <Card className="shadow-md bg-white/90 backdrop-blur-sm">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5 text-violet-500" />
            Dil Dağılımı
          </CardTitle>
          <CardDescription>
            Yorumların dil bazlı analizi (langid algoritması ile tespit)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={languageDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="percentage"
                      nameKey="language"
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(1)}%`}
                    >
                      {languageDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      formatter={(value: any) => [`${Number(value)}%`, "Yüzde"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 text-sm font-medium text-gray-600">Dil</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Yorum Sayısı</th>
                      <th className="text-right py-3 px-4 text-sm font-medium text-gray-600">Oran</th>
                      <th className="text-center py-3 px-4 text-sm font-medium text-gray-600">Örnek</th>
                    </tr>
                  </thead>
                  <tbody>
                    {languageDistribution.map((lang, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50/50' : 'bg-white'}>
                        <td className="py-3 px-4 text-sm text-gray-800 font-medium">{lang.language}</td>
                        <td className="py-3 px-4 text-right text-sm font-medium text-violet-600">{formatNumber(lang.commentCount)}</td>
                        <td className="py-3 px-4 text-right text-sm">{lang.percentage}%</td>
                        <td className="py-3 px-4 text-center text-sm text-gray-500 italic">{lang.example}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EngagementTab;
