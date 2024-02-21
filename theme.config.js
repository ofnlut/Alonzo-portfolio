const YEAR = new Date().getFullYear();
import { GrGithub, GrInstagram  } from "react-icons/gr";

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> Devin Mozee.
      </small>
      <a href="https://github.com/ofnlut"><GrGithub /></a>
      <a href="https://instagram.com/uhlonzo_"><GrInstagram /></a>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
          margin-left: 0.5rem;
        }
      `}</style>
    </footer>
  ),
};
