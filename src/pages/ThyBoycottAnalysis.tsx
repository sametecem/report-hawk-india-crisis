
import React from "react";
import {
  LineChart, Line, BarChart, Bar, PieChart, Pie, AreaChart, Area, 
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, Cell,
  ResponsiveContainer
} from "recharts";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import Table from "@/components/Table";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Info } from "lucide-react";

// Daily comment volume data
const commentVolumeData = [
  { name: "May 7", comments: 250 },
  { name: "May 8", comments: 280 },
  { name: "May 9", comments: 780 },
  { name: "May 10", comments: 350 },
  { name: "May 11", comments: 270 },
  { name: "May 12", comments: 240 },
  { name: "May 13", comments: 310 },
  { name: "May 14", comments: 290 },
  { name: "May 15", comments: 1050 },
  { name: "May 16", comments: 340 },
  { name: "May 17", comments: 330 },
  { name: "May 18", comments: 890 },
  { name: "May 19", comments: 450 },
  { name: "May 20", comments: 410 },
  { name: "May 21", comments: 380 },
];

// Sentiment analysis data
const sentimentData = [
  { name: "May 7", score: 0.2 },
  { name: "May 8", score: 0.1 },
  { name: "May 9", score: 0.0 },
  { name: "May 10", score: -0.1 },
  { name: "May 11", score: -0.05 },
  { name: "May 12", score: -0.2 },
  { name: "May 13", score: -0.4 },
  { name: "May 14", score: -0.6 },
  { name: "May 15", score: -0.3 },
  { name: "May 16", score: -0.4 },
  { name: "May 17", score: -0.3 },
  { name: "May 18", score: -0.5 },
  { name: "May 19", score: -0.4 },
  { name: "May 20", score: -0.45 },
  { name: "May 21", score: -0.5 },
];

// Topic clustering data
const topicData = [
  { name: "Flight Cancellations", value: 128, score: -0.72, fill: "#f97316" },
  { name: "Customer Service Issues", value: 97, score: -0.65, fill: "#fbbf24" },
  { name: "Political Statements", value: 76, score: -0.81, fill: "#facc15" },
  { name: "Refund Problems", value: 64, score: -0.58, fill: "#84cc16" },
  { name: "Alternative Airlines", value: 45, score: -0.3, fill: "#22c55e" },
  { name: "Corporate Responsibility", value: 38, score: -0.4, fill: "#10b981" },
  { name: "Personal Experiences", value: 27, score: -0.26, fill: "#06b6d4" },
];

// Language distribution data
const languageData = [
  { name: "Hindi", value: 45, fill: "#8b5cf6" },
  { name: "English", value: 32, fill: "#3b82f6" },
  { name: "Turkish", value: 15, fill: "#ef4444" },
  { name: "Other", value: 8, fill: "#6b7280" },
];

// Call-to-Action detection data
const ctaData = [
  { name: "May 7", cta: 50 },
  { name: "May 8", cta: 70 },
  { name: "May 9", cta: 90 },
  { name: "May 10", cta: 350 },
  { name: "May 11", cta: 60 },
  { name: "May 12", cta: 70 },
  { name: "May 13", cta: 80 },
  { name: "May 14", cta: 90 },
  { name: "May 15", cta: 480 },
  { name: "May 16", cta: 50 },
  { name: "May 17", cta: 80 },
  { name: "May 18", cta: 100 },
  { name: "May 19", cta: 320 },
  { name: "May 20", cta: 80 },
  { name: "May 21", cta: 60 },
];

// Post boycott intensity data
const boycottIntensityData = [
  { id: 6, intensity: 95, fill: "#ef4444" },
  { id: 10, intensity: 93, fill: "#ef4444" },
  { id: 8, intensity: 90, fill: "#ef4444" },
  { id: 2, intensity: 80, fill: "#f97316" },
  { id: 9, intensity: 75, fill: "#f97316" },
  { id: 4, intensity: 73, fill: "#f97316" },
  { id: 7, intensity: 70, fill: "#f97316" },
  { id: 3, intensity: 68, fill: "#f97316" },
  { id: 5, intensity: 65, fill: "#f97316" },
  { id: 1, intensity: 48, fill: "#facc15" },
];

// Hourly velocity data
const hourlyVelocityData = [
  { hour: "00:00", comments: 4 },
  { hour: "01:00", comments: 5 },
  { hour: "02:00", comments: 6 },
  { hour: "03:00", comments: 5 },
  { hour: "04:00", comments: 4 },
  { hour: "05:00", comments: 5 },
  { hour: "06:00", comments: 6 },
  { hour: "07:00", comments: 8 },
  { hour: "08:00", comments: 10 },
  { hour: "09:00", comments: 12 },
  { hour: "10:00", comments: 8 },
  { hour: "11:00", comments: 9 },
  { hour: "12:00", comments: 16 },
  { hour: "13:00", comments: 14 },
  { hour: "14:00", comments: 17 },
  { hour: "15:00", comments: 16 },
  { hour: "16:00", comments: 13 },
  { hour: "17:00", comments: 12 },
  { hour: "18:00", comments: 28, alert: true },
  { hour: "19:00", comments: 22, alert: true },
  { hour: "20:00", comments: 20, alert: true },
  { hour: "21:00", comments: 18, alert: true },
  { hour: "22:00", comments: 10 },
  { hour: "23:00", comments: 5 },
];

// Toxicity heatmap data
const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const hoursOfDay = Array.from({ length: 24 }, (_, i) => i);

const generateHeatmapData = () => {
  const data = [];
  daysOfWeek.forEach(day => {
    hoursOfDay.forEach(hour => {
      // Higher values in evening hours and for specific days
      let base = Math.random() * 0.3;
      
      // Make evenings (18-22) more toxic
      if (hour >= 18 && hour <= 22) {
        base += 0.5;
      } else if (hour >= 12 && hour <= 17) {
        base += 0.2;
      }
      
      // Make Wed-Fri more toxic
      if (day === "Wed" || day === "Thu" || day === "Fri") {
        base += 0.2;
      }
      
      // Clamp value between 0 and 1
      const value = Math.min(Math.max(base, 0), 1);
      
      data.push({
        day,
        hour,
        value
      });
    });
  });
  return data;
};

const heatmapData = generateHeatmapData();

// Top engagement comments
const topComments = [
  {
    id: 1,
    user: "user519",
    date: "May 19",
    content: "We will never fly with Turkish Airlines again! #Boycott",
    badges: ["Boycott", "High Impact"],
    avatar: "https://i.pravatar.cc/100?img=1",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YWlycGxhbmV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 2,
    user: "user862",
    date: "May 16",
    likes: 72,
    content: "Cancelled my tickets and booking with another airline. #BoycottTurkishAirlines",
    badges: ["Boycott", "High Impact"],
    avatar: "https://i.pravatar.cc/100?img=2",
    image: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWlybGluZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
  },
  {
    id: 3,
    user: "user753",
    date: "May 18",
    likes: 74,
    content: "Shameful behavior from THY. Lost my respect forever.",
    badges: ["High Impact"],
    avatar: "https://i.pravatar.cc/100?img=3",
    image: "https://images.unsplash.com/photo-1464037866556-6812c9d1c72e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFpcnBvcnR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
  }
];

// Top negative posts
const topNegativePosts = [
  { 
    id: "post_6", 
    comments: 363, 
    date: "2025-05-16",
    negative: 89.5,
    image: "https://images.unsplash.com/photo-1531642765602-5fe05cc1d1e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBsYW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: "post_10", 
    comments: 506, 
    date: "2025-05-20",
    negative: 88.0,
    image: "https://images.unsplash.com/photo-1534482421-64566f976cfa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBsYW5lfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&h=100&q=80"
  },
  {
    id: "post_8", 
    comments: 315, 
    date: "2025-05-18",
    negative: 85.9,
    image: "https://images.unsplash.com/photo-1554123168-b400f9c806ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGluZGlhfGVufDB8fDB8fHww&auto=format&fit=crop&w=100&h=100&q=80"
  }
];

const ThyBoycottAnalysis = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="mb-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">THY Boycott Analysis</h1>
            <p className="text-gray-600">Instagram comment analysis for Turkish Airlines India conflict</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 mr-1"></span>
              <span className="text-sm text-gray-600">Live Monitoring</span>
            </div>
            <span className="text-sm text-gray-500">Updated: May 22, 01:02 AM</span>
          </div>
        </div>
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-200 mt-6">
          <button className="px-4 py-2 text-gray-800 font-medium border-b-2 border-blue-500">Overview</button>
          <button className="px-4 py-2 text-gray-500">Comments</button>
          <button className="px-4 py-2 text-gray-500">Reports</button>
          <button className="px-4 py-2 text-gray-500">Settings</button>
        </div>
      </div>
      
      {/* First Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Daily Comment Volume */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Daily Comment Volume</h2>
            <Info size={18} className="text-gray-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={commentVolumeData} margin={{ top: 5, right: 5, left: 0, bottom: 20 }}>
                <defs>
                  <linearGradient id="colorComments" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value) => [`${value} comments`, 'Volume']}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: 'none'
                  }}
                />
                <Area 
                  type="monotone" 
                  dataKey="comments" 
                  stroke="#3b82f6" 
                  fillOpacity={1} 
                  fill="url(#colorComments)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Peak Days:</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                May 10: 777 comments
              </div>
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                May 15: 1087 comments
              </div>
              <div className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs">
                May 19: 848 comments
              </div>
            </div>
          </div>
        </div>
        
        {/* Sentiment Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Sentiment Analysis</h2>
            <Info size={18} className="text-gray-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={sentimentData} margin={{ top: 5, right: 5, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis domain={[-1, 1]} tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value: number) => [value.toFixed(2), 'Sentiment Score']}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: 'none'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#3b82f6" 
                  strokeWidth={2} 
                  activeDot={{ r: 6 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4">
            <div className="mb-3">
              <h3 className="text-sm font-medium text-gray-700">Average Sentiment:</h3>
              <div className="bg-red-50 text-red-600 inline-block px-3 py-1 rounded mt-1">
                Negative: -0.31
              </div>
            </div>
            
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-2">Sentiment Distribution:</h3>
              <div className="w-full h-6 bg-gray-200 rounded-full overflow-hidden">
                <div className="flex h-full">
                  <div className="bg-red-500 h-full" style={{ width: '68.7%' }}></div>
                  <div className="bg-gray-400 h-full" style={{ width: '25.6%' }}></div>
                  <div className="bg-green-500 h-full" style={{ width: '5.6%' }}></div>
                </div>
              </div>
              <div className="flex justify-between text-xs mt-1">
                <span className="text-red-500">Negative: 68.7%</span>
                <span className="text-gray-500">Neutral: 25.6%</span>
                <span className="text-green-500">Positive: 5.6%</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Topic Clustering */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Topic Clustering</h2>
            <Info size={18} className="text-gray-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={topicData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={1}
                  dataKey="value"
                >
                  {topicData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value} comments`]}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: 'none'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 max-h-40 overflow-y-auto">
            <table className="w-full text-sm">
              <tbody>
                {topicData.map((topic, index) => (
                  <tr key={index} className="border-b last:border-0 border-gray-100">
                    <td className="py-1">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: topic.fill }}></div>
                        <span>{topic.name}</span>
                      </div>
                    </td>
                    <td className="text-right font-medium">{topic.value}</td>
                    <td className="text-right">
                      <span className="text-red-500">{topic.score}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      
      {/* Second Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Toxicity Heatmap */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Toxicity Heatmap</h2>
            <Info size={18} className="text-gray-400" />
          </div>
          
          <div className="mb-4 overflow-x-auto">
            <div className="flex">
              <div className="pr-2 flex flex-col justify-around">
                {daysOfWeek.map((day, i) => (
                  <div key={i} className="h-8 flex items-center text-xs text-gray-600">{day}</div>
                ))}
              </div>
              <div className="flex-grow">
                <div className="grid grid-cols-24 gap-0.5">
                  {hoursOfDay.map((hour) => (
                    <div key={hour} className="text-xs text-gray-500 text-center">{hour}</div>
                  ))}
                  {heatmapData.map((cell, i) => {
                    // Calculate color based on value
                    const r = Math.round(255 * cell.value);
                    const g = Math.round(255 * (1 - cell.value));
                    const b = Math.round(255 * (1 - cell.value) * 0.8);
                    
                    return (
                      <div 
                        key={i} 
                        className="h-8 rounded-sm" 
                        style={{ 
                          backgroundColor: `rgb(${r}, ${g}, ${b})`,
                          opacity: 0.7 + (cell.value * 0.3)
                        }}
                      />
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-full h-2 bg-gradient-to-r from-green-300 via-yellow-300 to-red-500 rounded"></div>
            <div className="text-xs text-gray-500">High</div>
          </div>
          
          <p className="text-sm text-gray-700 mb-1">Hours with toxicity score > 0.8 are classified as high alert.</p>
          <p className="text-sm text-gray-500">Hotspots: Wed-Fri evenings (18:00-22:00)</p>
        </div>
        
        {/* Post Boycott Intensity */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Post Boycott Intensity</h2>
            <Info size={18} className="text-gray-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={boycottIntensityData}
                layout="vertical"
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
                <XAxis type="number" domain={[0, 100]} />
                <YAxis dataKey="id" type="category" tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value) => [`${value}% negative`]}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: 'none'
                  }}
                />
                <Bar dataKey="intensity">
                  {boycottIntensityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Highest Negative Posts:</h3>
            <div className="space-y-3">
              {topNegativePosts.map((post, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img src={post.image} alt={post.id} className="w-10 h-10 object-cover rounded-md" />
                    <div className="ml-3">
                      <div className="text-sm font-medium">{post.id}</div>
                      <div className="text-xs text-gray-500">{post.comments} comments</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-500">{post.date}</div>
                    <div className="text-sm font-medium text-red-500">{post.negative}% negative</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call-to-Action Detection */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Call-to-Action Detection</h2>
            <Info size={18} className="text-gray-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={ctaData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value: number) => [`${value} CTA comments`]}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: 'none'
                  }}
                />
                <Bar 
                  dataKey="cta" 
                  fill={(data) => data.cta > 300 ? "#ef4444" : "#3b82f6"} 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium text-gray-700">Average CTA Rate:</span>
              <span className="text-sm font-medium text-red-500">30.5%</span>
            </div>
            <div className="flex justify-between mb-4">
              <span className="text-sm font-medium text-gray-700">Highest CTA Day:</span>
              <span className="text-sm font-medium text-red-500">May 10 <span className="ml-2 px-1.5 py-0.5 bg-red-100 text-red-500 rounded">47.0%</span></span>
            </div>
            
            <div>
              <p className="text-sm font-medium text-gray-700 mb-1">Most common CTA phrases:</p>
              <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
                <li>"boycott immediately"</li>
                <li>"cancel your tickets"</li>
                <li>"spread the word"</li>
                <li>"stop flying with"</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      
      {/* Third Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Language Distribution */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Language Distribution</h2>
            <Info size={18} className="text-gray-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={languageData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={1}
                  dataKey="value"
                >
                  {languageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`${value}%`]}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: 'none'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {languageData.map((lang, index) => (
              <div key={index} className="flex items-center">
                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: lang.fill }}></div>
                <span className="text-sm text-gray-700">{lang.name} {lang.value}%</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* User Persona Analysis */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">User Persona Analysis</h2>
            <Info size={18} className="text-gray-400" />
          </div>
          
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="border border-gray-100 rounded-lg p-4 flex flex-col items-center text-center">
              <div className="mb-2">
                <Avatar className="h-16 w-16">
                  <AvatarImage src="https://i.pravatar.cc/100?img=1" alt="Real Photo" />
                  <AvatarFallback>RP</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="font-medium text-gray-800">Real Photo</h3>
              <div className="mt-1 text-lg font-bold text-gray-700">55%</div>
              <p className="text-xs text-gray-500 mt-1">12 examples</p>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-4 flex flex-col items-center text-center">
              <div className="mb-2">
                <Avatar className="h-16 w-16 bg-orange-400">
                  <AvatarFallback>MEME</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="font-medium text-gray-800">Meme/Political</h3>
              <div className="mt-1 text-lg font-bold text-gray-700">25%</div>
              <p className="text-xs text-gray-500 mt-1">8 examples</p>
            </div>
            
            <div className="border border-gray-100 rounded-lg p-4 flex flex-col items-center text-center">
              <div className="mb-2">
                <Avatar className="h-16 w-16 bg-gray-700">
                  <AvatarFallback>ANON</AvatarFallback>
                </Avatar>
              </div>
              <h3 className="font-medium text-gray-800">Anonymous</h3>
              <div className="mt-1 text-lg font-bold text-gray-700">20%</div>
              <p className="text-xs text-gray-500 mt-1">6 examples</p>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-2">Key Insights:</h3>
            <ul className="text-sm text-gray-600 space-y-1 list-disc pl-5">
              <li><span className="font-medium">Real Photos:</span> More measured criticism, personal stories</li>
              <li><span className="font-medium">Meme/Political:</span> Higher toxicity, more call-to-actions</li>
              <li><span className="font-medium">Anonymous:</span> More extreme statements, higher boycott usage</li>
            </ul>
          </div>
        </div>
        
        {/* Hourly Velocity Monitor */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-gray-800">Hourly Velocity Monitor</h2>
            <Info size={18} className="text-gray-400" />
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={hourlyVelocityData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="hour" tick={{ fontSize: 10 }} interval={2} />
                <YAxis tick={{ fontSize: 12 }} />
                <Tooltip 
                  formatter={(value) => [`${value} comments/min`]}
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
                    border: 'none'
                  }}
                />
                <Bar 
                  dataKey="comments" 
                  fill={(data) => data.alert ? "#ef4444" : "#3b82f6"} 
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
          
          <div className="mt-4">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Alert Hours:</h3>
            <div className="flex flex-wrap gap-2">
              <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs">
                18:00: 29/min
              </div>
              <div className="bg-red-50 text-red-600 px-3 py-1 rounded-full text-xs">
                21:00: 22/min
              </div>
            </div>
            <div className="mt-2 text-sm text-amber-600">
              Alert threshold: &gt;20 comments/min
            </div>
          </div>
        </div>
      </div>
      
      {/* Fourth Row - Full Width */}
      <div className="bg-white p-6 rounded-lg shadow-sm mb-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Top Engagement Comments</h2>
          <Info size={18} className="text-gray-400" />
        </div>
        
        <div className="space-y-6">
          {topComments.map((comment) => (
            <div key={comment.id} className="border-b border-gray-100 pb-6 last:border-0 last:pb-0">
              <div className="flex items-start">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage src={comment.avatar} alt={comment.user} />
                  <AvatarFallback>{comment.user.substring(0, 2)}</AvatarFallback>
                </Avatar>
                
                <div className="flex-grow">
                  <div className="flex items-center mb-1">
                    <span className="font-medium text-gray-900 mr-2">{comment.user}</span>
                    {comment.likes && (
                      <span className="bg-blue-50 text-blue-600 text-xs px-2 py-0.5 rounded">
                        {comment.likes}
                      </span>
                    )}
                    <span className="text-gray-500 text-sm ml-auto">{comment.date}</span>
                  </div>
                  
                  <p className="text-gray-800 mb-3">{comment.content}</p>
                  
                  <div className="flex gap-2">
                    {comment.badges.map((badge, i) => (
                      <Badge key={i} className={`${badge === 'Boycott' ? 'bg-red-50 text-red-600 hover:bg-red-100' : 'bg-gray-50 text-gray-700 hover:bg-gray-100'} border-0`}>
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
                
                {comment.image && (
                  <div className="ml-4 w-20 h-20 flex-shrink-0">
                    <AspectRatio ratio={1/1} className="bg-muted rounded-md overflow-hidden">
                      <img src={comment.image} className="object-cover w-full h-full" alt="Post attachment" />
                    </AspectRatio>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThyBoycottAnalysis;
