import ParkOptions from "./ParkOptions";
import ZipForm from "./ZipForm";

function FindPark() {
    return (
        <>
        <p>this is the findpark control comp</p>
        <hr />
        <ZipForm />
        <ParkOptions />
        <hr />
        <p>user choices generate here:</p>
        </>
    )
}
export default FindPark;