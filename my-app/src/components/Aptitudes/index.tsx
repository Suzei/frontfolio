export interface IAptitudes {
  name?: string;
  proficiency?: string;
}

export interface IAptitude {
  aptitude: IAptitudes[];
}

function Aptitudes({ aptitude }: IAptitude) {
  return (
    <>
      {aptitude.map(item => (
        <div>
          {item.name}
          {item.proficiency}
        </div>
      ))}
    </>
  );
}

export default Aptitudes;
