export const Items = [

  { id: 5, name: "Banana" },
  { id: 6, name: "vpple" },
  { id: 4, name: "wherry" },
  { id: 3, name: "therry" },
  { id: 1, name: "Aanana" },
  { id: 2, name: "lherry" },
];

export const sortDataByName = (data: any[]) => {
  return data.sort((a, b) => a.name.localeCompare(b.name));

};
export const sortDataById = (data: any[]) => {
  return data.sort((a, b) => a.id - b.id); 
};

export const generateUsers = async (count: number) => {
  const response = await fetch(`https://randomuser.me/api/?results=${count}`);
  const data = await response.json();
  return data.results;
};



