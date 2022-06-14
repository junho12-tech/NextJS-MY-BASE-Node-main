import useSWR from 'swr'
import fetcher from '../utils/fetcher'
import { Button } from 'react-bootstrap';
import { useRouter } from 'next/router'
export default function sex(){
    const router = useRouter()
    const { data, error } = useSWR('/api/random', fetcher)
    function Reset() {
        return router.reload
    }
    if (error){
        return (
            <div>
                에러
            </div>
        )
    }
    if (!data){
        return (
            <div>
                로딩
            </div>
        )
    }else {
        return(
            <div style={{textAlign: 'center', height: '100%'}}>
                <title>로또번호추첨</title>
                    <div className="box">
                      <h1 className="LOTTO">금주 로또 당첨 번호</h1>
                        <ul className="circleContainer">
                          <li className={data.Random1 <= 10?"radious-yellow":data.Random1 <= 20?"radious-blue": data.Random1 <= 30?"radious-red":data.Random1 <= 40?"radious-black":data.Random1 <= 45?"radious-green":"radious-gray"} style={{marginRight: '30px'}}>{data.Random1}</li>
                          <li className={data.Random2 <= 10?"radious-yellow":data.Random2 <= 20?"radious-blue": data.Random2 <= 30?"radious-red":data.Random2 <= 40?"radious-black":data.Random2 <= 45?"radious-green":"radious-gray"} style={{marginRight: '30px'}}>{data.Random2}</li>
                          <li className={data.Random3 <= 10?"radious-yellow":data.Random3 <= 20?"radious-blue": data.Random3 <= 30?"radious-red":data.Random3 <= 40?"radious-black":data.Random3 <= 45?"radious-green":"radious-gray"} style={{marginRight: '30px'}}>{data.Random3}</li>
                          <li className={data.Random4 <= 10?"radious-yellow":data.Random4 <= 20?"radious-blue": data.Random4 <= 30?"radious-red":data.Random4 <= 40?"radious-black":data.Random4 <= 45?"radious-green":"radious-gray"} style={{marginRight: '30px'}}>{data.Random4}</li>
                          <li className={data.Random5 <= 10?"radious-yellow":data.Random5 <= 20?"radious-blue": data.Random5 <= 30?"radious-red":data.Random5 <= 40?"radious-black":data.Random5 <= 45?"radious-green":"radious-gray"} style={{marginRight: '30px'}}>{data.Random5}</li>
                          <li className={data.Random6 <= 10?"radious-yellow":data.Random6 <= 20?"radious-blue": data.Random6 <= 30?"radious-red":data.Random6 <= 40?"radious-black":data.Random6 <= 45?"radious-green":"radious-gray"} style={{marginRight: '30px'}}>{data.Random6}</li>
                          <li className="radious-plus" style={{marginRight: '30px'}} >+</li>
                          <li style={{marginRight: '30px'}} className={data.Random7 <= 10?"radious-yellow":data.Random7 <= 20?"radious-blue": data.Random7 <= 30?"radious-red":data.Random7 <= 40?"radious-black":data.Random7 <= 45?"radious-green":"radious-gray"}>{data.Random7}</li>
                        </ul>
                        <Button variant="primary" className="resetbtn" onClick={Reset()} style={{marginBottom: '10px'}} >리셋</Button> <br/>
                        <Button variant="primary" className="resetbtn" onClick={Reset()} style={{marginBottom: '700px'}}>번호 리스트</Button>
                    </div>
            </div>
        )
    }
}