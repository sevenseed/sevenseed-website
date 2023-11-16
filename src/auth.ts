import { headers } from "next/headers";
import supabase from "./supabase";
import { RedirectType, redirect } from "next/navigation";

const getFullPath = () => {
  const urlString = headers().get("x-url");
  if (!urlString) return null;
  const url = new URL(urlString);
  return url.pathname + url.search;
};

const getUser = async () => {
  const { data, error } = await supabase.auth.getUser();
  if (error) {
    if (error.status === 401) {
      const fullPath = getFullPath();
      if (fullPath) {
        return redirect(
          `/login?${new URLSearchParams({ returnTo: fullPath })}`,
          RedirectType.replace,
        );
      } else {
        return redirect("/login", RedirectType.replace);
      }
    } else {
      throw new Error(error.message);
    }
  }
  const user = data.user
  if (!user.email) {
    throw new Error("User email is missing")
  }
  return {
    id: user.id,
    email: user.email,
  }
};

export default getUser;
