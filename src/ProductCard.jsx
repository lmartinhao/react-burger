import Card from 'react-bootstrap/Card';

function ProcuctCard(props) {

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Preço: ${props.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default ProcuctCard


/* button com quantidade (adicionar e remover)
state hook
*/
