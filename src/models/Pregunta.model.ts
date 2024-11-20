import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    ForeignKey,
    HasMany,
} from "sequelize-typescript";
import Formulario from "./Formulario.model";
import Opcion from "./Opcion.model";
@Table({
    tableName: "pregunta",
    timestamps: false,
})
class Pregunta extends Model {
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare codpregunta: number;

    @ForeignKey(() => Formulario)
    @Column({
        type: DataType.NUMBER,
    })
    declare codformulario: number;

    @Column({
        type: DataType.STRING(100),
    })
    declare pregunta: string;

    @Column({
        type: DataType.STRING(30),
    })
    declare tipopregunta: string;

    @HasMany(() => Opcion)
    declare opciones: Opcion[];
}

export default Pregunta;