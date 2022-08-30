type PersonListProps = {
    nameList: {
        first: string;
        last: string;
    }[]
}

const PersonList = ({ nameList }: PersonListProps) => {
  return (
    <div>
        {nameList.map((name, index) => <div key={index}>{name.first} {name.last}</div>)}
    </div>
  )
}

export default PersonList