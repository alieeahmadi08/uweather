import Component, { PageEl } from '@/components/Libs/Component';
import Copy from '@/components/Libs/Copy';
import Router from 'next/router'
import Window from '@/components/Libs/Window';
import TextBox from '@/components/Libs/TextBox';
import Icon2Titles from '@/components/Libs/Icon2Titles';
import Icon3Titles from '@/components/Libs/Icon3Titles';


export default p => Component(p, Page);
const Page: PageEl = (props, state, refresh, getProps) => {

  let styles = global.styles


  return (
    <div style={{ direction: "ltr", minHeight: "11vh", }}>
      <br-x />
      <Window title={"Weather Shiraz : "} style={{ minHeight: 200, margin: 10, width: "calc(100% - 20px)" , backgroundColor: "#E95C5C"}}>

      <br-x/>

        <div style={{width: "100%" , height: "50px" , backgroundColor: "#99CCCC" , borderRadius: "5px",
          textAlign: "center"
        }}>

          <br-x/>
          <br-x/>

          <span>Feels Like : {props.p[0].FeelsLikeC}</span>

        </div>

        <br-x/>

        <div style={{width: "100%" , height: "50px" , backgroundColor: "#99CCCC" , borderRadius: "5px",
          textAlign: "center"
        }}>

        <br-x/>
        <br-x/>

          <span>Humidity : {props.p[0].humidity}</span>

        </div>

        <br-x/>

        <div style={{width: "100%" , height: "50px" , backgroundColor: "#99CCCC" , borderRadius: "5px",
          textAlign: "center"
        }}>

          <br-x/>
          <br-x/>

          <span>Pressure : {props.p[0].pressure}</span>

        </div>

        <br-x/>

        <div style={{width: "100%" , height: "50px" , backgroundColor: "#99CCCC" , borderRadius: "5px",
          textAlign: "center"
        }}>

          <br-x/>
          <br-x/>

          <span>WeatherCode : {props.p[0].weatherCode}</span>

        </div>

        <br-xx/>

        <center >

          تیم پژوهشی 127

        </center>

      </Window>

        

    </div>
  )
}


export async function getServerSideProps(context) {


  var session = await global.SSRVerify(context)
  var { uid, name, image, imageprop, lang, cchar,
    unit, workspace, servid, servsecret,
    usedquota, quota, quotaunit, status, regdate, expid,
    role, path, devmod, userip, } = session;

  let data = await (await fetch("https://irmapserver.ir/research/api/weather")).json()
  console.log(data)
  let p = data.current_condition

  return {
    props: {
      data: global.QSON.stringify({
        session,
        p,
        // nlangs,
      })
    },
  }
}