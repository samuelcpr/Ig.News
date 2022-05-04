import { NextApiRequest, NextApiResponse } from "next";
// FORMAS DE AUTENTICAÇÃO
// JWT (Storage)
// Next Auth (Social) loguin com terceiro ex: github

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: "Samuel" },
    { id: 2, name: "Lucas" },
    { id: 3, name: "Ruan" },
  ];
  return response.json(users);
};

// todas a apis routes são utilizadas usando o
//conceito de serveless

//
