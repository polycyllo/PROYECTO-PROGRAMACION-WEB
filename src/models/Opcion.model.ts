import {
    Table,
    Column,
    Model,
    DataType,
    Default,
    ForeignKey,
    BelongsTo,
    HasMany,
} from "sequelize-typescript";
import Pregunta from "./Pregunta.model";
import RespuestaUsuario from "./RespuestaUsuario";
@Table({
    tableName: "opcion",
    timestamps: false,
})
class Opcion extends Model {
    @Column({
        type: DataType.NUMBER,
        primaryKey: true,
        autoIncrement: true,
    })
    declare codrespuesta: number;

    @ForeignKey(() => Pregunta)
    @Column({
        type: DataType.NUMBER,
    })
    declare codpregunta: number;

    @Column({
        type: DataType.STRING(300),
    })
    declare textoopcion: string;

    @Default(false)
    @Column({
        type: DataType.BOOLEAN,
    })
    declare esrespuesta: boolean;

    @HasMany(() => RespuestaUsuario)
    declare respuestasusuarios: RespuestaUsuario[];
}

export default Opcion;
