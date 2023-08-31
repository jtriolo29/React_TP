// eslint-disable-next-line import/no-unresolved
import { useNavigate } from "react-router-dom";
import contactImgUrl from "url:../images/baseline_perm_identity_black_48dp.png";
import { formatPhoneNumber } from "../utils/formatPhoneNumber";

function Contact({
  imgSrc = contactImgUrl,
  contactKey,
  name,
  telNumber,
  email,
}) {
  // Added phone formatting and buttons for Edit as challenge - not part of code-along
  const navigate = useNavigate();

  let formattedPhone = "";
  if (telNumber.length == 7 || telNumber.length == 10) {
    formattedPhone = formatPhoneNumber(telNumber);
  } else {
    formattedPhone = telNumber;
  }

  return (
    <figure className="w-56 flex flex-col items-center bg-gray-50  rounded-xl p-8 space-y-2 shadow-xl ">
      <div>
        <img
          className="w-24 h-24 rounded-full"
          src={imgSrc}
          alt="the contact's headshot"
        />
      </div>
      <h1 className="text-lg font-semibold">{name}</h1>
      <p className="font-light text-gray-500">{formattedPhone}</p>
      <p className="font-light text-gray-500">{email}</p>
      {/* Added button for Edit as challenge - not part of code along */}
      <button
        onClick={() => navigate(`/${contactKey}`)}
        className="bg-blue-600 rounded-full py-1 px-4 text-white hover:bg-gray-50 hover:border-blue-400  
          hover:text-blue-400 hover:shadow-2xl border-2"
      >
        Edit
      </button>
    </figure>
  );
}

export default Contact;
