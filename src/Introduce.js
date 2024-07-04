import Hd from './component/Hd'

function Jeong(){
    return(
        // 자바스크립트 xml html 태그가 아님. xml임.
        // 부모 자식으로 들어가야지 부모가 두개면 불들어와
        //그래서 <> 와 </>겉에 두르고 하면 가능
        <> 
            <Hd></Hd>
        </>
       
    )
}

export default Jeong