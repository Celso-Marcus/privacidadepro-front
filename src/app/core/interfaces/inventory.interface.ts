export interface Inventory {
  id: number;
  tagName: string;
  sector: string;
  collectedData: string;
  sourceData: string;
  reasonData: string;
  howStorage: string;
  securityData: string;
  deadlineData: string;
  justificationData: string;
  underAgeData: boolean;
  sensitiveData: string;
  foreignData: string;
  shareData: string;
  controller: string;
  operators: string[];
  systemNames: string[];
  dpoName: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateInventory {
  tagName: string;
  sector: string;
  colletedData: string;
  sourceData: string;
  reasonData: string;
  howStorage: string;
  securityData: string;
  deadlineData: string;
  justificationData: string;
  underAgeData: boolean;
  sensitiveData: string;
  controller: string;
}

export interface UpdateInventory {
  sector?: string;
  colletedData?: string;
  sourceData?: string;
  reasonData?: string;
  howStorage?: string;
  securityData?: string;
  deadlineData?: string;
  justificationData?: string;
  underAgeData?: boolean;
  sensitiveData?: string;
  controller?: string;
}
