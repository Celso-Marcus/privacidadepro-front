export interface Inventory {
  id: string;
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
  createdAt: Date;
}
