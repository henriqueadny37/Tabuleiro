import Linha from "./linha";

export default function tabuleiro(){
    return(
        <div>
            <Linha />
            <Linha branco/>
            <Linha />
            <Linha branco/>
            <Linha />
            <Linha branco/>
            <Linha />
            <Linha branco/>
        </div>
    )
}