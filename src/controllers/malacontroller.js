import {mala} from '../models/mala.js';

class MalaController {

   static async listarMalas(req, res, next) {
    try {
      const listarMalas = await mala.find({});
      res.status(200).json(listarMalas);
    }
    catch (error) {
      next(error);
    }; 
}
    static async postarMala(req, res, next) {
     try {
        const novaMala = req.body;
        const malaCriada = await mala.create(novaMala);
        res.status(201).json({ message: "mala criada com sucesso", mala: malaCriada });
     } catch (error) {
        next(error);
     }
      }
    
      static async atualizarMala(req, res, next) {
     try {
        const id = req.params.id;
        await mala.findByIdAndUpdate(id, req.body);
        res.status(201).json({ message: "mala atualizada com sucesso" });
     } catch (error) {
        next(error);
     }
      }
    
      static async deletarMala(req, res, next) {
     const id = req.query.id;
     try {
        await mala.findByIdAndDelete(id);
        res.status(201).json({ message: "mala deletada com sucesso" });
     } catch (error) {
        next(error);
     }
      }
}
export default MalaController;