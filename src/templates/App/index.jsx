import { Heading } from '../../components/Heading';
import * as Styled from './styles';

function Home() {
  return (
    <div className="App">
      <Styled.Wrapper>
        <Heading colorFont={true}>Testando</Heading>
      </Styled.Wrapper>
    </div>
  );
}

export default Home;
