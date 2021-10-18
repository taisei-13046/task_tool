export interface DataType {
	taskValue: string
	radioValue: string
	dateStartValue: any | null
	dateEndValue: any | null
	remarksValue?: string
}

export interface GanttType {
    TaskID: number;
    TaskName: string;
    StartDate: Date;
    EndDate: Date;
}
