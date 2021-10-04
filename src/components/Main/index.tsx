import * as S from './styles'

const Main = ({
  title = 'NextJs Boilerplate',
  description = 'A TypeScript, ReactJS, NextJS and Styled Components boilerplate'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
