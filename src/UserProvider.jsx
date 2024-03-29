import React, { useState, useContext, useEffect } from "react";
import validator from "validator";
import img from "./assets/productImg.png";
import image from "./assets/royal.png";
import image2 from "./assets/oldprince.png";
import image3 from "./assets/vitalcan.jpg";
import image4 from "./assets/Kongo.png";

const userContext = React.createContext();
const LoadedContext = React.createContext();
const ValidationContext = React.createContext();
const articlesContext = React.createContext();

export function useUserContext() {
  return useContext(userContext);
}

export function useLoadedContext() {
  return useContext(LoadedContext);
}

export function useValidationContext() {
  return useContext(ValidationContext);
}
export function useArticlesContext() {
  return useContext(articlesContext);
}

const UserProvider = ({ children }) => {
  const [auth, setAuth] = useState({ name: "", role: "" });

  const [isLoaded, setIsLoaded] = useState(false);

  const [data, setData] = useState([]);

  const [cart, setCart] = useState([]);

  const [articles, setArticles] = useState([]);

  const validatePassword = (n = "hol") => {
    return (
      validator.isLength(n, { min: 8, max: 20 }) &&
      validator.isStrongPassword(n, {
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 0,
      })
    );
  };

  const validateMail = (n) => {
    return (
      validator.isLength(n, { min: 5, max: 36 }) &&
      validator.isEmail(n, {
        allow_display_name: false,
        require_display_name: false,
        allow_utf8_local_part: true,
        require_tld: true,
        allow_ip_domain: false,
        domain_specific_validation: false,
        blacklisted_chars: "",
        host_blacklist: [],
      })
    );
  };

  const validateName = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z ]*$") &&
      validator.isLength(n, { min: 5, max: 36 })
    );
  };

  const validateToken = (n) => {
    return (
      validator.matches(n, "^[a-zA-Z0-9]*$") &&
      validator.isLength(n, { min: 8, max: 50 }) &&
      validator.isStrongPassword(n, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 0,
        minNumbers: 1,
        minSymbols: 0,
        returnScore: false,
        pointsPerUnique: 1,
        pointsPerRepeat: 0.5,
        pointsForContainingLower: 10,
        pointsForContainingUpper: 10,
        pointsForContainingNumber: 10,
        pointsForContainingSymbol: 10,
      })
    );
  };

  const validateText = (t = "hol") => {
    let patron = /\w+\s\w+\s?.+/;
    return patron.test(t) && validator.isLength(t, { min: 8, max: 300 });
  };

  const validateLogin = async (u, p) => {
    await fetch("https://forrajeria-back-end.vercel.app/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail: u, password: p }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (
          json.message === "Wrong Credentials" ||
          json.message === "User not found"
        ) {
          setAuth({ user: false, role: false });
        }
      });
  };

  const login = async (u, p) => {
    await fetch("https://forrajeria-back-end.vercel.app/users/login", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ mail: u, password: p }),
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.message === "User and password OK") {
          setAuth({ name: json.name, role: json.role });
        }
      })
      .catch((error) => setAuth({ user: false, role: false }))
      .finally(() => setIsLoaded(false));
  };

  const logout = () => {
    setAuth({ name: "", role: "" });
  };

  const addUser = (u) => {
    fetch("https://forrajeria-back-end.vercel.app/users/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: u.name,
        mail: u.mail,
        password: u.password,
        role: u.role,
      }),
    }).finally(() => setIsLoaded(false));
  };

  const LISTA = [
    {
      id: "1",
      name: "Golden",
      title: "Old Prince",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
      quantity: 1,
      price: 1000,
      img: img,
    },
    {
      id: "2",
      name: "Royal",
      title: "Old Prince",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Lorem ipsusdasddasdasdasdasd asdasdaddasdm dolor sit amet coasdasdnsectetur",
      quantity: 1,
      price: 500,
      img: img,
    },
    {
      id: "3",
      name: "Old Prince",
      title: "Old Prince",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Lorem iasdasdasdapsum dolor sit amet conseasdadaasdadctetur",
      quantity: 1,
      price: 700,
      img: img,
    },
    {
      id: "4",
      name: "Golden",
      title: "Old Prince",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
      quantity: 1,
      price: 1000,
      img: img,
    },
    {
      id: "5",
      name: "Golden",
      title: "Old Prince",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
      quantity: 1,
      price: 1041,
      img: img,
    },
    {
      id: "6",
      name: "Golden",
      title: "Old Prince",
      category: "Perro",
      subcategory: "Adulto",
      type: "Pollo y Carne",
      description:
        "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
      quantity: 1,
      price: 1540,
      img: img,
    },
  ];

  const Articles = [
    {
      id: "Royal",
      name: "Royal",
      img: image,
      products: [
        {
          id: "10",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1000,
          img: img,
        },
        {
          id: "20",
          name: "Royal",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsusdasddasdasdasdasd asdasdaddasdm dolor sit amet coasdasdnsectetur",
          quantity: 1,
          price: 500,
          img: img,
        },
        {
          id: "30",
          name: "Old Prince",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem iasdasdasdapsum dolor sit amet conseasdadaasdadctetur",
          quantity: 1,
          price: 700,
          img: img,
        },
        {
          id: "40",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1000,
          img: img,
        },
        {
          id: "50",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1041,
          img: img,
        },
        {
          id: "60",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1540,
          img: img,
        },
      ],
    },
    {
      id: "Old",
      name: "Old Prince",
      img: image2,
      products: [
        {
          id: "1",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1000,
          img: img,
        },
        {
          id: "2",
          name: "Royal",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsusdasddasdasdasdasd asdasdaddasdm dolor sit amet coasdasdnsectetur",
          quantity: 1,
          price: 500,
          img: img,
        },
        {
          id: "3",
          name: "Old Prince",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem iasdasdasdapsum dolor sit amet conseasdadaasdadctetur",
          quantity: 1,
          price: 700,
          img: img,
        },
        {
          id: "4",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1000,
          img: img,
        },
        {
          id: "5",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1041,
          img: img,
        },
        {
          id: "6",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1540,
          img: img,
        },
      ],
    },
    {
      id: "Vital",
      name: "Vital Can",
      img: image3,
      products: [
        {
          id: "1000",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1000,
          img: img,
        },
        {
          id: "2000",
          name: "Royal",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsusdasddasdasdasdasd asdasdaddasdm dolor sit amet coasdasdnsectetur",
          quantity: 1,
          price: 500,
          img: img,
        },
        {
          id: "3000",
          name: "Old Prince",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem iasdasdasdapsum dolor sit amet conseasdadaasdadctetur",
          quantity: 1,
          price: 700,
          img: img,
        },
        {
          id: "4000",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1000,
          img: img,
        },
        {
          id: "5000",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1041,
          img: img,
        },
        {
          id: "6000",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1540,
          img: img,
        },
      ],
    },
    {
      id: "Kongo",
      name: "Kongo",
      img: image4,
      products: [
        {
          id: "100",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1000,
          img: img,
        },
        {
          id: "200",
          name: "Royal",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsusdasddasdasdasdasd asdasdaddasdm dolor sit amet coasdasdnsectetur",
          quantity: 1,
          price: 500,
          img: img,
        },
        {
          id: "300",
          name: "Old Prince",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem iasdasdasdapsum dolor sit amet conseasdadaasdadctetur",
          quantity: 1,
          price: 700,
          img: img,
        },
        {
          id: "400",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1000,
          img: img,
        },
        {
          id: "500",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1041,
          img: img,
        },
        {
          id: "600",
          name: "Golden",
          title: "Old Prince",
          category: "Perro",
          subcategory: "Adulto",
          type: "Pollo y Carne",
          description:
            "Lorem ipsuma dolor sasdasdasdadasdit amet conssdasdasdectetur",
          quantity: 1,
          price: 1540,
          img: img,
        },
      ],
    },
  ];

  useEffect(() => {
    setData(LISTA);
    setArticles(Articles);
  }, []);

  return (
    <userContext.Provider value={{ auth, setAuth, addUser, login, logout }}>
      <LoadedContext.Provider value={{ isLoaded, setIsLoaded }}>
        <ValidationContext.Provider
          value={{
            validatePassword,
            validateMail,
            validateName,
            validateLogin,
            validateToken,
            validateText,
          }}
        >
          <articlesContext.Provider
            value={{
              data,
              setData,
              LISTA,
              cart,
              setCart,
              articles,
              setArticles,
            }}
          >
            {children}
          </articlesContext.Provider>
        </ValidationContext.Provider>
      </LoadedContext.Provider>
    </userContext.Provider>
  );
};

export default UserProvider;
