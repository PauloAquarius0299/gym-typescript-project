export enum SelectedPage {
    Inicio = 'inicio',
  Beneficios = 'beneficios',
  NossoEspaco = 'nossoespaco',
  Contatos = 'contatos',
  Benefit = "Benefit",
  OurClasses = "OurClasses",
}

export interface BenefitType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}