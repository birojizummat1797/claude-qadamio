"""Compact helpers for authoring Roadmap KB v3 entries (same schema as roadmap_kb_v2.json)."""

ROLES = ["Tadqiqotchi", "O'rganuvchi", "Amaliyotchi", "Builder", "Candidate"]


def S(n, name, name_uz, weeks, hours, grad_by, constraints, focus, right, wrong, criteria, challenges, skills):
    return {
        "n": n, "name": name, "name_uz": name_uz, "weeks": weeks, "role": ROLES[n],
        "daily_hours": hours, "graduate_by": grad_by,
        "constraints": [list(c) for c in constraints],
        "daily_focus": focus, "signs_right": right, "signs_wrong": wrong,
        "graduate_criteria": criteria, "challenges": challenges, "skills_gained": skills,
    }


def W(w, theme, days):
    names = ["Du", "Se", "Ch", "Pa", "Ju", "Sh", "Ya"]
    assert len(days) == 6, (theme, days)
    return {"w": w, "theme": theme, "days": [f"{d}: {t}" for d, t in zip(names, days + ["Dam"])]}


def R(name, url, lang="EN"):
    return {"name": name, "url": url, "lang": lang}


def C(uz, cluster, cluster_uz, why, outcomes, next_step, stages, calendar, actions, mentor, resources, milestones):
    assert len(stages) == 5 and len(calendar) == 4
    return {
        "uz": uz, "cluster": cluster, "cluster_uz": cluster_uz, "why": why,
        "b_point": {"outcomes": outcomes, "next_step": next_step},
        "stages": stages, "calendar_30d": calendar, "first_3_actions": actions,
        "mentor_path": mentor, "resources": resources,
        "milestones": [{"week": w, "milestone": m} for w, m in milestones],
    }


MENTOR_GENERIC = [
    "Sohadagi tajribali mutaxassisdan 20 daqiqalik suhbat so'rash",
    "Mahalliy IT hamjamiyatlari va meetup'lar",
    "Onlayn hamjamiyatlarda savol berish va boshqalarga yordam berish",
]
