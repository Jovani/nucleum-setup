export interface City {
  name: string;
  numberIds: number[];
}

export const Cities: { [key: string]: City } = {
  Aussig: { name: 'Aussig', numberIds: [16, 16, 7, 7] },
  Bautzen: { name: 'Bautzen', numberIds: [9, 9, 12, 12] },
  Brux: { name: 'Brüx', numberIds: [14, 14, 13, 13] },
  Chemnitz: { name: 'Chemnitz', numberIds: [13, 13, 14, 14] },
  Dresden: { name: 'Dresden', numberIds: [3, 3, 3, 3] },
  Freiberg: { name: 'Freiberg', numberIds: [10, 10, 11, 11] },
  Glashutte: { name: 'Glashütte', numberIds: [12, 12, 18, 18] },
  Gorlitz: { name: 'Görlitz', numberIds: [0, 0, 5, 5] },
  Grimma: { name: 'Grimma', numberIds: [4, 4, 4, 4] },
  Joachimsthal: { name: 'Joachimsthal', numberIds: [6, 6, 6, 6] },
  Karlsbad: { name: 'Karlsbad', numberIds: [0, 0, 9, 9] },
  Leipzig: { name: 'Leipzig', numberIds: [1, 1, 1, 1] },
  Marienberg: { name: 'Marienberg', numberIds: [7, 7, 8, 8] },
  Plauen: { name: 'Plauen', numberIds: [2, 2, 2, 2] },
  Praha: { name: 'Praha', numberIds: [8, 8, 10, 10] },
  Presnitz: { name: 'Preßnitz', numberIds: [11, 11, 17, 17] },
  Riesa: { name: 'Riesa', numberIds: [15, 15, 15, 15] },
  Zittau: { name: 'Zittau', numberIds: [5, 5, 16, 16] },
  Zwickau: { name: 'Zwickau', numberIds: [17, 17, 19, 19] },
};
