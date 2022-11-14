export interface Job {
    address: string
    benefits: string[]
    createdAt: string
    description: string
    email: string
    employment_type: string[]
    id: string
    location: Location
    name: string
    phone: string
    pictures: string[]
    salary: string
    title: string
    updatedAt: string
    rating: string[]
    convertedDescription: ConvertedDescription
  }
  
  export interface Location {
    lat: number
    long: number
  }

  export interface ConvertedDescription {
    title: string
    responsopilities: string
    benefits: string[]
  }