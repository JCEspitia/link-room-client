import { useForm } from "react-hook-form";
import {
  createLink,
  deleteLink,
  getLink,
  updateLink,
} from "../api/links.api.js";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { ROUTES } from "../routes.js";

// yup o zod para validación de forms

export function LinkFormPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateLink(params.id, data);
      toast.success("Link updated successfully.", {
        position: "top-right",
        style: {
          background: "#f5f5f5",
          color: "#0d5f7d",
        },
      });
    } else {
      await createLink(data);
      toast.success("Link created successfully.", {
        position: "top-right",
        style: {
          background: "#f5f5f5",
          color: "#0d5f7d",
        },
      });
    }

    navigate(ROUTES.HOME);
  });

  useEffect(() => {
    async function loadLink() {
      if (params.id) {
        const { data } = await getLink(params.id);
        setValue("title", data.title);
        setValue("url", data.url);
        setValue("description", data.description);
        setValue("user", data.user);
        setValue("categories", data.categories);
        setValue("tags", data.tags);
      }
    }

    loadLink();
  }, []);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Link name"
          {...register("title", { required: true })}
        />
        {errors.title && <span>This field is required</span>}

        <input
          type="url"
          placeholder="https://google.com"
          {...register("url", { required: true })}
        />
        {errors.title && <span>This field is required</span>}

        <textarea
          placeholder="Description"
          cols="30"
          rows="10"
          {...register("description", { required: false })}
        ></textarea>

        <select {...register("user", { required: true })}>
          <option value="1">Software</option>
        </select>
        <select multiple {...register("categories", { required: true })}>
          <option value="1">Resources</option>
        </select>
        <select multiple {...register("tags", { required: true })}>
          <option value="1">Icons</option>
          <option value="2">Fonts</option>
        </select>
        <button>Save</button>
      </form>

      {params.id && (
        <button
          onClick={async () => {
            const accepted = window.confirm("Are you sure?");
            if (accepted) {
              await deleteLink(params.id);
              toast.success("Link deleted successfully.", {
                position: "top-right",
                style: {
                  background: "#f5f5f5",
                  color: "#0d5f7d",
                },
              });
              navigate(ROUTES.HOME);
            }
          }}
        >
          Delete
        </button>
      )}
    </div>
  );
}
