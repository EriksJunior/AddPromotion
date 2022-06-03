export default interface Publication {
  uuid: String,
  idEnterprise: String,
  description: String,
  img: String,
  originalValue: Number | null,
  promotionalValue: Number | null,
  discountPercentage: String,
}
