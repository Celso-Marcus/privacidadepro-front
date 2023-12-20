export interface Checklist {
  id: number;
  category: string;
  answers: string;
  files: string[];
  updatedAt: Date;
}

export interface ChecklistFile {
  formatedName: string;
  fileName: string;
  date: Date;
}
