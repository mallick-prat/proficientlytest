import { useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

import Button from "@/components/Button/index";
import Card from "@/components/Card/index";
import Content from "@/components/Content/index";
import Meta from "@/components/Meta/index";
import { useInvitations, useWorkspaces } from "@/hooks/data/index";
import { AccountLayout } from "@/layouts/index";
import api from "@/lib/common/api";
import { useWorkspace } from "@/providers/workspace";

const Welcome = () => {
  const router = useRouter();
  const { data: invitationsData, isLoading: isFetchingInvitations } =
    useInvitations();
  const { data: workspacesData, isLoading: isFetchingWorkspaces } =
    useWorkspaces();
  const { setWorkspace } = useWorkspace();
  const [isSubmitting, setSubmittingState] = useState(false);

  const accept = (memberId) => {
    setSubmittingState(true);
    api(`/api/workspace/team/accept`, {
      body: { memberId },
      method: "PUT",
    }).then((response) => {
      setSubmittingState(false);

      if (response.errors) {
        Object.keys(response.errors).forEach((error) =>
          toast.error(response.errors[error].msg)
        );
      } else {
        toast.success("Accepted invitation!");
      }
    });
  };

  const decline = (memberId) => {
    setSubmittingState(true);
    api(`/api/workspace/team/decline`, {
      body: { memberId },
      method: "PUT",
    }).then((response) => {
      setSubmittingState(false);

      if (response.errors) {
        Object.keys(response.errors).forEach((error) =>
          toast.error(response.errors[error].msg)
        );
      } else {
        toast.success("Declined invitation!");
      }
    });
  };

  const navigate = (workspace) => {
    setWorkspace(workspace);
    router.replace(`/account/${workspace.slug}`);
  };

  return (
    <AccountLayout>
      <Meta title="Proficiently - Dashboard" />
      <Content.Title
        title="Proficiently"
        subtitle="IB & Consulting Prep on Demand"
      />
      <Content.Divider />

<div className="rounded-xl bg-white p-4 ring ring-gray-200 sm:p-6 lg:p-8">
  <div className="flex items-start sm:gap-8">
    <div className="flex flex-col items-center w-1/3">
      <div className="hidden sm:block w-full aspect-w-1 aspect-h-1">  
        <h1 className="text-large font-bold mb-2">
          Continue Learning      
        </h1>
        <img class="h-auto w-auto rounded-lg" src="https://media.npr.org/assets/img/2021/09/10/gettyimages-1684157-ea24ccec4e96ff9ebe147b186f7cb09b4e6dcd07.jpg" alt="image description"></img>
      </div>
      <div className="hidden sm:block w-full">
                    <div class="flex items-center justify-between">
                <p class="text-gray-700 text-[10px] py-1">
                    2% Completed
                </p>
            </div>
            <div class="w-full h-2 bg-green-200 rounded-full">
                <div class="w-1/12 h-full text-center text-xs text-white bg-green-600 rounded-full">
                </div>
            </div>
      </div>
    </div>

    <div>
      <div className="space-x-2">
        <strong className="rounded-full inline-flex items-center justify-center rounded-full bg-green-100 text-green-700 px-3 py-1.5 text-[10px] font-large text-white">
          Course
        </strong>

        <strong className="rounded-full bg-blue-500 px-3 py-1.5 text-[10px] font-large text-white">
          Investment Banking
        </strong>
      </div>

      <h3 className="mt-4 text-lg font-medium sm:text-xl">
        <a href="" className="hover:underline">
          Introduction to Investment Banking
        </a>
      </h3>

      <p className="mt-1 text-sm text-gray-700">
        An all-in-one crash course on Investment Banking. Areas covered include
        mergers and acquisitions, equity capital markets, debt capital markets,
        leveraged finance, and restructuring. Learn with interactive quizzes,
        practice questions, and AI-driven insights.
      </p>

      <div className="mt-4 sm:flex sm:items-center sm:gap-2">
        <span className="text-xs font-medium shidden sm:block" aria-hidden="true">
          2 &middot;
        </span>
        <p className="text-xs font-medium">Capital Markets - Equity Capital Markets</p>

        <div className="flex items-center gap-1 text-gray-500 ml-auto">
          <div className="rounded-full bg-blue-500 px-3 py-1.5 text-xs font-medium text-white">
            Continue Learning →
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<div className = "text-xl text-black">
  Explore Our Library
</div>
      <Content.Divider />

    </AccountLayout>
  );
};

export default Welcome;
