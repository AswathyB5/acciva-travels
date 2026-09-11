import { NavLink } from "react-router-dom";

// Admin-editable button links can be an internal route ("/contact"), an
// on-page anchor ("#attach-vehicle"), or a full external URL/mailto/tel —
// this picks the right element so react-router never tries to client-route
// something it can't.
const isExternal = (to) => /^([a-z][a-z0-9+.-]*:)?\/\//i.test(to) || /^(mailto|tel):/i.test(to);

const SmartLink = ({ to, children, className, ...rest }) => {
  if (isExternal(to)) {
    return (
      <a href={to} target="_blank" rel="noopener noreferrer" className={className} {...rest}>
        {children}
      </a>
    );
  }
  if (to?.startsWith("#")) {
    return (
      <a href={to} className={className} {...rest}>
        {children}
      </a>
    );
  }
  return (
    <NavLink to={to || "/"} className={className} {...rest}>
      {children}
    </NavLink>
  );
};

export default SmartLink;
