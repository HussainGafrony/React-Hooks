export interface Table {
  data: any[],
  Sorted: boolean,
  sortData: (data: any) => void,
  user: any,
}
