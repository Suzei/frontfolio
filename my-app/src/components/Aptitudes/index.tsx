export interface IAptitudes {
  aptitudes: [
    {
      name?: string;
      proficiency?: string;
    },
  ];
}

export function Aptitudes({ aptitudes }: IAptitudes) {
  return (
    <>
      {aptitudes.map(item => (
        <div>
          {item.name}
          {item.proficiency}
        </div>
      ))}
    </>
  );
}
