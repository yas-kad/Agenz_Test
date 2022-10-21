import React, { useState } from 'react'
import { ToggleButtonGroup, ToggleButton } from '@mui/material';

function Button() {

  const [formats, setFormats] = useState([])

    const handleFormatChange = (e, prev) => {
        setFormats(prev)
    }

    console.log(formats)

    const activeButtonStyle = {textTransform: 'capitalize',background : 'white', border: '1px solid #460AF0', color:'#460AF0', display:"flex" ,alignItems:"center",justifyContent:"center","padding":"10px","width":"109px","height":"30px","borderRadius":"2px",fontSize:"12px",lineHeight:"18px",fontWeight:"500"}
    const nonActiveButtonStyle = { textTransform: 'capitalize', color:'#460AF0', "display":"flex" ,"alignItems":"center","justifyContent":"center","padding":"10px","width":"109px","height":"30px","borderRadius":"2px",fontSize:"12px",lineHeight:"18px",fontWeight:"500", border: '1px solid rgba(0, 0, 0, 0.3)'}
    const groupButton = {"display":"flex","alignItems":"center","justifyContent":"space-between","gap":"12px"}
    const ball = {"width":"8px","height":"8px","backgroundColor":"red","borderRadius":"50%","marginRight":"5px"}
    const valideButtonStyle = {textTransform: 'capitalize', backgroundColor: '#460AF0', width: '87px',color:'white', padding:'10px 21px',width:"109px",height:"30px",borderRadius:"2px",fontSize:"12px",lineHeight:"18px",fontWeight:"500", border: '1px solid rgba(0, 0, 0, 0.3)'}

  return (
    <>
      <ToggleButtonGroup style={groupButton} aria-label='text formatting' value={formats} exclusive onChange={handleFormatChange}>
        {
            formats == 'a' ? (<ToggleButton disableRipple='true' style={activeButtonStyle} value='a'> <span style={ball}></span> À vendre</ToggleButton>) : (<ToggleButton style={nonActiveButtonStyle} value='a'>À vendre</ToggleButton>)
        }
        {
            formats == 'b' ? (<ToggleButton disableRipple='true' style={activeButtonStyle} value='b'> <span style={ball}></span> Prix</ToggleButton>) : (<ToggleButton style={nonActiveButtonStyle} value='b'>Prix</ToggleButton>)
        }
        {
            formats == 'c' ? (<ToggleButton disableRipple='true' style={activeButtonStyle} value='c'> <span style={ball}></span> Type</ToggleButton>) : (<ToggleButton style={nonActiveButtonStyle} value='c'>Type</ToggleButton>)
        }
        {
            formats == 'd' ? (<ToggleButton disableRipple='true' style={activeButtonStyle} value='d'> <span style={ball}></span> Surface</ToggleButton>) : (<ToggleButton style={nonActiveButtonStyle} value='d'>Surface</ToggleButton>)
        }
        {
            formats == 'e' ? (<ToggleButton disableRipple='true' style={activeButtonStyle} value='e'> <span style={ball}></span> Chambres</ToggleButton>) : (<ToggleButton style={nonActiveButtonStyle} value='e'>Chambres</ToggleButton>)
        }
      </ToggleButtonGroup>
      <ToggleButton style={valideButtonStyle}> Valider</ToggleButton>
    </>
  )
}

export default Button; 