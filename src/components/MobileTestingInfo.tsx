import React from 'react';
import { Smartphone, Tablet, Monitor } from 'lucide-react';

const MobileTestingInfo = () => {
  const testingChecklist = [
    {
      category: 'Mobile Phones',
      icon: <Smartphone className="w-6 h-6 text-teal-600" />,
      devices: [
        'iPhone 14 Pro (393×852)',
        'iPhone SE (375×667)',
        'Samsung Galaxy S23 (360×800)',
        'Google Pixel 7 (412×915)'
      ]
    },
    {
      category: 'Tablets',
      icon: <Tablet className="w-6 h-6 text-teal-600" />,
      devices: [
        'iPad Pro 12.9" (1024×1366)',
        'iPad Air (820×1180)',
        'Samsung Galaxy Tab (768×1024)',
        'Surface Pro (912×1368)'
      ]
    },
    {
      category: 'Desktop',
      icon: <Monitor className="w-6 h-6 text-teal-600" />,
      devices: [
        'Desktop 1920×1080',
        'Desktop 1440×900',
        'Ultrawide 2560×1080',
        'Large 4K 3840×2160'
      ]
    }
  ];

  const performanceMetrics = [
    { metric: 'First Contentful Paint', target: '< 1.5s', current: 'Optimized' },
    { metric: 'Largest Contentful Paint', target: '< 2.5s', current: 'Optimized' },
    { metric: 'Cumulative Layout Shift', target: '< 0.1', current: 'Optimized' },
    { metric: 'Time to Interactive', target: '< 3.8s', current: 'Optimized' }
  ];

  return (
    <div className="bg-gray-50 p-8 rounded-lg">
      <h3 className="text-2xl font-bold text-gray-900 mb-6">Mobile Testing & Performance</h3>
      
      {/* Device Testing */}
      <div className="mb-8">
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Device Testing Checklist</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testingChecklist.map((category, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <div className="flex items-center mb-3">
                {category.icon}
                <h5 className="font-medium text-gray-900 ml-2">{category.category}</h5>
              </div>
              <ul className="space-y-1 text-sm text-gray-600">
                {category.devices.map((device, deviceIndex) => (
                  <li key={deviceIndex} className="flex items-center">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                    {device}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Performance Metrics */}
      <div>
        <h4 className="text-lg font-semibold text-gray-800 mb-4">Performance Targets</h4>
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Metric</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Target</th>
                <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {performanceMetrics.map((metric, index) => (
                <tr key={index}>
                  <td className="px-4 py-3 text-sm text-gray-900">{metric.metric}</td>
                  <td className="px-4 py-3 text-sm text-gray-600">{metric.target}</td>
                  <td className="px-4 py-3">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {metric.current}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MobileTestingInfo;