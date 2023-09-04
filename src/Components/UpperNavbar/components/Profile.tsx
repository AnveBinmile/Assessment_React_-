import { Bell, Search, ProfilePicture } from "../../ComponentImages";

const Profile = () => {
  return (
    <div>
      <ul className="flex items-center h-[100px] gap-[15px] flex-row sm:gap-[20px] pr-[5px]">
        <li>
          <img className="h-[20px]" src={Search} alt="" />
        </li>
        <li>
          <img className="h-[20px]" src={Bell} alt="" />
        </li>

        <li>
          <div className="flex items-center gap-[10px]">
            <img src={ProfilePicture} alt="" />
            <h5 className="text-white font-poppins text-medium font-medium">
              Tetiana
            </h5>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
