import React from 'react';
import { Badge } from '@/components/ui/badge';

const ApplicationHeader: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-1 mt-4">
      <h1 className="text-4xl">
        {import.meta.env.VITE_APP_NAME || 'React Boilerplate'}
      </h1>
      <Badge variant="outline">
        {import.meta.env.VITE_APP_VERSION || '0.1.0'}
      </Badge>
    </div>
  );
};

export default ApplicationHeader;
