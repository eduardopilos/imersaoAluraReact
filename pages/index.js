import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import {AlurakutMenu} from '../src/lib/AlurakutCommons'


function ProfileSidebar(propriedades){
  
  return(
    <Box>
      <img style ={{ borderRadius: '8px'}} src={`https://github.com/${propriedades.gitHubUser}.png`}/>
    </Box>
  )
}


export default function Home() {
  const gitHubUser = 'eduardopilos';
  const amigos = [
    'Edemundo',
    'LucasVmigotto',
    'peas',
    'pedssodre',
    'gdiasbruno',
    'juunegreiros'
  ]
  return (
    <>
      <AlurakutMenu/>
      <MainGrid>
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar gitHubUser={gitHubUser}/>
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            Bem vindo
          </Box>
        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Amigos ({amigos.length})</h2>
            <ul>
              {amigos.map((itemAtual) => {
                return (
                  <a href={`/users/${itemAtual}`} key={itemAtual}>
                    <img src={`https://github.com/${itemAtual}.png`}/>
                    <span>{itemAtual}</span>
                  </a>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>
            Comunidades
          </Box>
        </div>
      </MainGrid>
    </>
  )
}
