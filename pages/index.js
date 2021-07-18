import React from 'react';
import MainGrid from '../src/components/MainGrid'
import Box from '../src/components/Box'
import { AlurakutMenu, AlurakutProfileSidebarMenuDefault, OrkutNostalgicIconSet } from '../src/lib/AlurakutCommons';
import { ProfileRelationsBoxWrapper } from '../src/components/ProfileRelations';

function ProfileSidebar(propriedades) {
  return (
    <Box as="aside">
       <img src={`https://github.com/${propriedades.githubUser}.png`} style={{ borderRadius: '8px' }} />
      <hr />

      <p>
        <a className="boxLink" href={`https://github.com/${propriedades.githubUser}`}>
          @{propriedades.githubUser}
        </a>
      </p>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  )
}

export default function Home() {
  const usuarioAleatorio = 'DanielleEmely';
  const [comunidades, setComunidades] = React.useState([{
    id: '12802378123789378912789789123896123', 
    title: 'Loucos por Pets',
    image: 'https://i.pinimg.com/736x/dc/c6/6a/dcc66a7ef2f74e81da4fdf3f1b52ab81.jpg',
    src: 'https://www.reddit.com/r/cutepets/'
  },
  {
    id: '93839898398393893389', 
    title: 'Meow',
    image: 'https://data.whicdn.com/images/30514560/original.jpg',
    src: 'https://www.reddit.com/r/cats/'
  },
  {
    id: '111111398000000000000893389', 
    title: 'Woof',
    image: 'https://img.freepik.com/free-vector/cute-welsh-corgi-dog-waving-paw-cartoon_42750-623.jpg?size=338&ext=jpg',
    src: 'https://www.reddit.com/r/dogpictures/'
  }
]);
  const pessoasFavoritas = [
    'iagoizi',
    'juunegreiros',
    'joaovitorvaz',
    'Cesar-Danilo',
    'marcobrunodev',
    'felipefialho'
  ]

  return (
    <>
      <AlurakutMenu githubUser={usuarioAleatorio} /> {/* Adicionado para pegar o valor de usuario*/}
      <MainGrid>
        {/* <Box style="grid-area: profileArea;"> */}
        <div className="profileArea" style={{ gridArea: 'profileArea' }}>
          <ProfileSidebar githubUser={usuarioAleatorio} />
        </div>
        <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
          <Box>
            <h1 className="title">
              Bem vindo(a) 
            </h1>

            <OrkutNostalgicIconSet />
          </Box>

          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={function handleCriaComunidade(e) {
                e.preventDefault();
                const dadosDoForm = new FormData(e.target);

                console.log('Campo: ', dadosDoForm.get('title'));
                console.log('Campo: ', dadosDoForm.get('image'));
                {/* Adicionada link para comunidade de forma  automatica*/}
                const comunidade = {
                  id: new Date().toISOString(),
                  title: dadosDoForm.get('title'),
                  image: dadosDoForm.get('image'),
                  src: dadosDoForm.get('src')
                }
                const comunidadesAtualizadas = [...comunidades, comunidade];
                setComunidades(comunidadesAtualizadas)
            }}>
              <div>
                <input
                  placeholder="Qual vai ser o nome da sua comunidade?"
                  name="title"
                  aria-label="Qual vai ser o nome da sua comunidade?"
                  type="text"
                  />
              </div>
              <div>
                <input
                  placeholder="Coloque uma URL para usarmos de capa"
                  name="image"
                  aria-label="Coloque uma URL para usarmos de capa"
                />
              </div>

              <div>
                <input
                  placeholder="Coloque uma URL para a comunidade"
                  name="src"
                  aria-label="Coloque uma URL para a comunidade"
                />
              </div>

              <button>
                Criar comunidade
              </button>
            </form>
          </Box>

        </div>
        <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
        
        <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Comunidades ({comunidades.length})
            </h2>
            <ul>
              {comunidades.map((itemAtual) => {
                return (
                  <li key={itemAtual.id}>
                    <a href={itemAtual.src}>
                      <img src={itemAtual.image} />
                      <span>{itemAtual.title}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>

          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({pessoasFavoritas.length})
            </h2>

            <ul>
              {pessoasFavoritas.map((itemAtual) => {
                return (
                  <li key={itemAtual}>
                    <a href={`/users/${itemAtual}`}>
                      <img src={`https://github.com/${itemAtual}.png`} />
                      <span>{itemAtual}</span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  )
}
