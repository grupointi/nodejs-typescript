import {getUsuarios , postUsuario} from '../../controllers/usuarios';
import axios from 'axios';

describe("Usuarios controller GET /api/usuarios", () => {
       it("should return a status code 200", async () => {
           const response = await axios.get('http://localhost:8000/api/usuarios');
              expect(response.status).toBe(200)
     });

      it("should return a defined response ", async  () => {
        const response = await axios.get('http://localhost:8000/api/usuarios');
           expect(response).toBeDefined();
         });
  });
