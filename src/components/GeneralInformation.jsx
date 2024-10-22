import EasyEdit, { Types } from "react-easy-edit";

export default function GeneralInformation() {
  return (
    <section>
      <h2>General Information</h2>
      <div className="form-box">
        <p>First Name</p>
        <EasyEdit type={Types.TEXT} value="Sem" />
        <p>Last Name</p>
        <EasyEdit type={Types.TEXT} value="van Velden" />
        <p>Telephone Number</p>
        <EasyEdit type={Types.TEXT} value="+31681518251" />
        <p>Email</p>
        <EasyEdit type={Types.TEXT} value="vanveldensem@gmail.com" />
        <p>Birth Date</p>
        <EasyEdit type={Types.DATE} value="20-06-1993" />
      </div>
    </section>
  );
}
