import { library } from "@fortawesome/fontawesome-svg-core";

import { 
    faTrash,
    faSignOutAlt, 
    faEdit, 
    faTrashAlt,
    faCircleNotch,
    faSpinner, 
    faPlusSquare,
    faMobile,
    faMapMarkerAlt,
    faPaperPlane,
    faLock
  } from "@fortawesome/free-solid-svg-icons";

const Icons = () => {
return library.add(
  faTrash, 
  faSignOutAlt, 
  faEdit, faTrashAlt, 
  faCircleNotch, 
  faSpinner, 
  faPlusSquare, 
  faMobile,
  faMapMarkerAlt,
  faPaperPlane,
  faLock
  );
};

export default Icons;