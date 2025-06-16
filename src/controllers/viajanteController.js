import viajanteModel from '../models/viajanteSchema.js';

class ViajanteController {
    static async listarViajantes(req, res, next) {
        try {
            const viajantes = await viajanteModel.find({});
            res.status(200).json(viajantes);
        } catch (error) {
            next(error);
        }
    }

    static async postarViajante(req, res, next) {
        try {
            const novoViajante = await viajanteModel.create(req.body);
            res.status(201).json(novoViajante);
        } catch (error) {
            next(error);
        }
    }

    static async atualizarViajante(req, res, next) {
        try {
            const { id } = req.params;
            await viajanteModel.findByIdAndUpdate(id, req.body);
            res.status(200).json({ message: "Viajante atualizado com sucesso" });
        } catch (error) {
            next(error);
        }
    }

    static async deletarViajante(req, res, next) {
        try {
            const { id } = req.query;
            await viajanteModel.findByIdAndDelete(id);
            res.status(200).json({ message: "Viajante deletado com sucesso" });
        } catch (error) {
            next(error);
        }
    }
}

// Exportação CORRETA - a classe completa
export default ViajanteController;