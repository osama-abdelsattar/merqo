import AnimatedSection from "@/components/animated-section";
import SectionHeader from "@/components/section-header";
import AccountInfoCard from "./_components/account-info-card";
import PasswordChangeCard from "./_components/password-change-card";

function EditProfilePage() {
  return (
    <AnimatedSection>
      <SectionHeader level="h1">Edit Profile</SectionHeader>
      <div className="grid md:grid-cols-12 gap-4 items-start *:sticky *:top-24">
        <AccountInfoCard />
        <PasswordChangeCard />
      </div>
    </AnimatedSection>
  );
}

export default EditProfilePage;
